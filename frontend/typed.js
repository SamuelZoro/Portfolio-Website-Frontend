var typed;

$(document).ready(function () {
  //function to set timer on when animation begins
  const myTimeout = setTimeout(startAnimation, 900);

  function startAnimation() {
    //code to create typing animation effect
    typed = new Typed('#typed', {
      strings: ['UK based web developer.', 'custom-built websites.', "highly scalable, and accessible."],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,

    });
  }
});