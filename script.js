window.onscroll = function () { scrollFunction() };
let navbar = document.getElementById("navbar");

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navbar.classList.add("nav-scroll");
        navbar.classList.remove("navbar-color");
    }

    else {
        navbar.classList.remove("nav-scroll");
        navbar.classList.add("navbar-color");
    }
}

function openTab(evt, cityName) {

    var i, gallery_content, gallery_links;

    gallery_content = document.getElementsByClassName("gallery-content");
    for (const content of gallery_content) {
        content.style.display = "none";
    }

    gallery_links = document.getElementsByClassName("gallery-links");
    for (const links of gallery_links) {
        links.className = links.className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";

    evt.currentTarget.className += " active";
}


document.getElementById("defaultOpen").click(); 
