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
