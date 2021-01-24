const router = require('express').Router();
const bcrypt = require('bcryptjs');
const multer = require('multer');
const upload = multer();
const uuid = require('uuid');
const { User, Hero, HeroImage, Story } = require('../../db/models');
const { generateToken, checkIfAuthenticated } = require('../../auth');
const { hashPassword } = require('../../utils');
const userValidation = require('../../validators/userValidator');
const { handleValidationErrors, asyncHandler } = require('../../utils');

const AWS = require('aws-sdk');
const { awsKeys } = require('../../config');

AWS.config.update({
  secretAccessKey: awsKeys.secretAccessKey,
  accessKeyId: awsKeys.accessKeyId,
  region: awsKeys.region
});

const createError = msg => {
  const err = new Error(msg);
  err.title = 'Invalid Login';
  err.status = 401;
  err.errors = [err.message];
  return err;
}

const s3 = new AWS.S3();

router.post('/auth', asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    res.locals.user = await User.findOne({ where: { email } });
  } catch (e) {
    return next(e);
  }

  const { user } = res.locals;
  if (!user) return next(createError('Invalid login.'));

  const isValidPassword = bcrypt.compareSync(password, user.hashed_password.toString());
  
  if (!isValidPassword) return next(createError('Invalid login.'));

  const { token } = generateToken(user.id, user.username);
  return res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      profileImage: user.profile_image
    }
  });
}));

router.get('/token', checkIfAuthenticated, (req, res) => {
  const { id, username, profile_image: profileImage } = res.locals.user;

  res.json({
    user: {
      id,
      username,
      profileImage
    }
  });
});

router.post('/', 
  userValidation, 
  handleValidationErrors,
  asyncHandler(async (req, res) => {
  const { username, email, password, profileImage } = req.body;
  const user = await User.create({
    username: username.trim(),
    email: email.trim(),
    hashed_password: await hashPassword(password.trim())
  });

  const { token } = generateToken(user.id, user.username);

  res.status(201).json({ token, user });
}));

router.get('/:id(\\d+)/heroes', asyncHandler(async (req, res) => {
  const heroes = await Hero.findAll({ 
    where: { 
      user_id: req.params.id,
    },
    include: [HeroImage],
    order: ['id']
  });

  res.json({ heroes });
}));

router.put('/:id(\\d+)', 
  upload.any(),
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const file = req.files ? req.files[0] : '';
  const user = await User.findByPk(id);

  if (req.body.password) {
    const passwordValidator = userValidation[2];
    const passwordValidation = await passwordValidator[0].run(req)
    const confirmPasswordValidation = await passwordValidator[1].run(req);

    if (passwordValidation.errors.length || confirmPasswordValidation.errors.length) {
      return res.status(400).json(
        {errors: [...passwordValidation.errors, ...confirmPasswordValidation.errors]}
      )
    }
  }

  if (file) {
    const params = {
      Bucket: 'story-maker-app/profile-images',
      Key: file.originalname + '-' + uuid(),
      Body: file.buffer,
      ACL: 'public-read',
      ContentType: file.mimetype
    }

    const uploadedImage = await s3.upload(params).promise();
    const imageUrl = uploadedImage.Location;

    s3.deleteObject({
      Bucket: 'story-maker-app/profile-images',
      Key: user.profile_image.split('/profile-images/')[1],
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Deleted')
      }
    })

    await user.update({
      profile_image: imageUrl
    });
  }
  
  res.status(200).json({ user });
}));

module.exports = router;