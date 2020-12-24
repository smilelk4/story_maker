import bodymovin from 'lottie-web';

const plusOneAnimation = target => {
  const plusOne = bodymovin.loadAnimation({
    wrapper: target,
    animType: 'svg',
    loop: false,
    path: '/svg/plus-one.json',
  });

  plusOne.onComplete = () => {
    plusOne.destroy();
  }
};

export default plusOneAnimation;