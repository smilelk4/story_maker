import bodymovin from 'lottie-web';

const hamburgerAnimation = target => {
  bodymovin.destroy('hamburger');
  return bodymovin.loadAnimation({
    wrapper: target,
    animType: 'svg',
    loop: false,
    path: '/svg/nav-hamburger.json',
    name: 'hamburger'
  });
};

export default hamburgerAnimation
