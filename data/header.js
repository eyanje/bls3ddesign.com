(() => {

    let header = document.createElement("header");
    let centerDiv = document.createElement("div");
    centerDiv.className = "center";
    let logoImg = document.createElement("img");
    logoImg.id = "headerlogo";
    logoImg.alt = "logo";
    logoImg.src = "/data/img/logo.png";
    centerDiv.appendChild(logoImg);
    centerDiv.appendChild(document.createTextNode(" "));
    let titleSpan = document.createElement("span");
    titleSpan.id = "headertitle";
    titleSpan.innerHTML = "BLS 3D Design";
    centerDiv.appendChild(titleSpan);

    let links = [
        { url: "/", label: "Home" },
        { url: "/calendar/", label: "Calendar" },
    ];

    let nav = document.createElement("nav");
    links.forEach((link) => {
        let linkElement = document.createElement("a");;
        if (link.url == location.pathname) {
            linkElement.style.fontStyle = "bold";
            linkElement.href = "#";
        } else {
            linkElement.href = link.url;
        }
        linkElement.innerHTML = link.label;
        nav.appendChild(linkElement);
     });
     centerDiv.appendChild(nav);

    header.appendChild(centerDiv);
    document.write(header.outerHTML);

})();
