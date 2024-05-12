

$(document).ready(function () {

  //javascript object with attributes representing the page title
  const page = {
    home: "h o m e",
    portfolio: "p o r t f o l i o",
    aboutMe: "a b o u t",
    contactMe: "c o n t a c t"
  }
  //retrieves the element which will output text for page title and insert the JS value
  document.getElementById("pageTitle").innerHTML = `${page.home}`;
  //when doc loads the home page is marked as active
  $("#home").addClass("activePage");
  $("#centering-container").load('typed.html');

  //when clicking on the portfolio icon
  $("#portfolio").click(function () {
    $("#portfolio").addClass("activePage");
    $("#home").removeClass("activePage");
    $("#about").removeClass("activePage");
    $("#contact").removeClass("activePage");
    document.getElementById("pageTitle").innerHTML = `${page.portfolio}`; //change page title
    $("#theBody").addClass("blurContainer"); // blur background
    $("#centering-container").empty();
    $("#centering-container").load('portfolio.html');
  });
  //when clicking on the home icon
  $("#home").click(function () {
    $("#home").addClass("activePage");
    $("#portfolio").removeClass("activePage");
    $("#about").removeClass("activePage");
    $("#contact").removeClass("activePage");
    document.getElementById("pageTitle").innerHTML = `${page.home}`;
    $("#theBody").removeClass("blurContainer");
    $("#centering-container").empty();
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
    $("#centering-container").load('typed.html');

  });
  //when clicking on the about icon
  $("#about").click(function () {
    $("#about").addClass("activePage");
    $("#portfolio").removeClass("activePage");
    $("#home").removeClass("activePage");
    $("#contact").removeClass("activePage");
    document.getElementById("pageTitle").innerHTML = `${page.aboutMe}`;
    $("#theBody").addClass("blurContainer");
    $("#centering-container").empty();
    $("#centering-container").load("about.html");

  });
  //when clicking on the contact icon
  $("#contact").click(function () {
    $("#portfolio").removeClass("activePage");
    $("#about").removeClass("activePage");
    $("#home").removeClass("activePage");
    $("#contact").addClass("activePage");
    document.getElementById("pageTitle").innerHTML = `${page.contactMe}`;
    $("#theBody").addClass("blurContainer");
    $("#centering-container").empty();
    $("#centering-container").load("contact.html");

  });

});


