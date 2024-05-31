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


let type = document.getElementById("type");

const writter = {

    write1: "Ali Raza",
    write2: "Web Designer",
    func: function (i) {

        if (i === 0) {
            return this.write1;
        } else {
            return this.write2;
        }

    }
};

let i = 0;


function updateContent() {
    type.innerHTML = writter.func(i);
    i = (i + 1) % 2;
}

setInterval(updateContent, 2100);

updateContent();
