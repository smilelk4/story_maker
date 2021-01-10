import bodymovin from 'lottie-web';

const swordAnimation = target => {
  bodymovin.destroy('swords');
  bodymovin.loadAnimation({
    wrapper: document.querySelector('.hub__new-adventure-svg-container'),
    animType: 'svg',
    loop: false,
    path: '/svg/swords.json',
    name: 'swords'
  });
};

export default swordAnimation;