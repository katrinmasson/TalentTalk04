// Importieren Sie die notwendigen Funktionen von Firebase.
import { getDatabase, ref, set, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
// Hier sollten Sie Ihre eigene Firebase-Konfiguration hinzufügen.
const firebaseConfig = {
// Ihre Firebase-Konfigurationsdaten
};
// Initialisieren Sie die Firebase-App.
const app = initializeApp(firebaseConfig);
// Erstellen Sie eine Referenz zur Datenbank.
const database = getDatabase(app);
// Deklarieren Sie das Namespace 'talentTalk'.
var talentTalk;
(function (talentTalk) {
    // Selektieren Sie HTML-Elemente aus Ihrem Dokument.
    let nameElement = document.getElementById("name");
    // ... Selektieren Sie weitere Elemente hier ...
    // Funktion zum Laden der Bewerberdaten aus Firebase.
    async function getData() {
        const bewerberRef = ref(database, 'bewerber/');
        try {
            const snapshot = await get(bewerberRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                handleBewerber(data);
            }
            else {
                console.log("Keine Daten verfügbar");
            }
        }
        catch (error) {
            console.error('Fehler beim Laden der Daten', error);
        }
    }
    // Funktion zum Speichern der Bewerberdaten in Firebase.
    function saveBewerberData(bewerber) {
        const bewerberRef = ref(database, 'bewerber/' + bewerber.name);
        set(bewerberRef, bewerber).then(() => {
            console.log('Daten erfolgreich gespeichert.');
        }).catch((error) => {
            console.error('Fehler beim Speichern der Daten', error);
        });
    }
    // Funktion zum Verarbeiten der geladenen Bewerberdaten.
    function handleBewerber(data) {
        let bewerberName = new URLSearchParams(window.location.search).get("bewerber");
        let currentBewerber = data.find(bewerber => bewerber.name === bewerberName);
        if (currentBewerber) {
            nameElement.innerText = currentBewerber.name;
            // ...weitere Zuweisungen zu Elementen hier...
        }
    }
    // Event-Listener für den Speicherbutton.
    let unlockButton = document.getElementById("noteButton");
    unlockButton.addEventListener('click', () => {
        // Logik, um die Daten aus Ihren Eingabefeldern zu sammeln.
        let bewerberData = {
            pic: "Pfad/zum/Bild",
            name: nameElement.innerText,
            // ...fügen Sie alle anderen Bewerberdaten hinzu...
            adresse: "",
            mail: "",
            telefon: "",
            geburtstag: "",
            lastSchool: "",
            lastPosition: "",
            specials: "",
            references: "",
            faehigkeiten: 0,
            berufserfahrungen: 0,
            softskills: 0,
            mood: "",
            input: "Einige neue Informationen"
        };
        // Wechseln zwischen Bearbeiten und Speichern.
        if (unlockButton.innerText === "Bearbeiten") {
            unlockButton.innerText = "Speichern";
        }
        else {
            saveBewerberData(bewerberData);
            unlockButton.innerText = "Bearbeiten";
        }
    });
    // Funktion zum initialen Laden der Bewerberdaten.
    getData().catch(console.error);
})(talentTalk || (talentTalk = {}));
//# sourceMappingURL=bewerber.js.map