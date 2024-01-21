"use strict";
var talentTalk;
(function (talentTalk) {
    listenInfo();
    function listenInfo() {
        getData("bewerber.json");
    }
    // Funktion, um Daten zu laden
    async function getData(_url) {
        let response = await fetch(_url);
        let data = await response.json();
        handleListe(data);
    }
    function handleListe(data) {
        let liste = document.getElementById('liste');
        //füge für jeden ein <li>-Element hinzu
        data.forEach(bewerber => {
            let listItem = document.createElement('li');
            listItem.innerHTML = bewerber.name;
            if (liste) {
                liste.appendChild(listItem);
            }
            listItem.addEventListener("click", () => { window.open("index.html?bewerber=" + bewerber.name, "_self"); });
        });
    }
})(talentTalk || (talentTalk = {}));
//# sourceMappingURL=liste.js.map