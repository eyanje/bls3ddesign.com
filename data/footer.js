(() => {

    let footerElement = document.createElement("footer");
    let centerDiv = document.createElement("div");
    centerDiv.className = "center";


    footerElement.appendChild(centerDiv);
    document.write(footerElement.outerHTML);

})();
