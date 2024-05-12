$(document).ready(function () {
    //javascript object with attributes representing the page title
    const page = {
        home: "h o m e",
        portfolio: "p o r t f o l i o",
        aboutMe: "a b o u t",
        contactMe: "c o n t a c t"
    }
    $("#collab").click(function () {
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