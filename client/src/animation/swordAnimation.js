import bodymovin from 'lottie-web';

const swordAnimation = target => {
  bodymovin.destroy('swords');
  bodymovin.loadAnimation({
    wrapper: document.querySelector('.new-adventure__svg-container'),
    animType: 'svg',
    loop: false,
    path: '/svg/swords.json',
    name: 'swords'
  });
};

export default swordAnimation;