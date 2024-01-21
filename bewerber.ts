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
// Definieren Sie die Schnittstelle 'Bewerber'.
interface Bewerber {
    pic: string;
    name: string;
    adresse: string;
    mail: string;
    telefon: string;
    geburtstag: string;
    lastSchool: string;
    lastPosition: string;
    specials: string;
    references: string;
    faehigkeiten: number;
    berufserfahrungen: number;
    softskills: number;
    mood: string;
    input: string;
}

// Selektieren Sie HTML-Elemente aus Ihrem Dokument.
let nameElement: HTMLParagraphElement = document.getElementById("name") as HTMLParagraphElement;
// ... Selektieren Sie weitere Elemente hier ...

// Funktion zum Laden der Bewerberdaten aus Firebase.
async function getData(): Promise<void> {
    const bewerberRef = ref(database, 'bewerber/');
    try {
        const snapshot = await get(bewerberRef);
        if (snapshot.exists()) {
            const data: Bewerber[] = snapshot.val();
            handleBewerber(data);
        } else {
            console.log("Keine Daten verfügbar");
        }
    } catch (error) {
        console.error('Fehler beim Laden der Daten', error);
    }
}

// Funktion zum Speichern der Bewerberdaten in Firebase.
function saveBewerberData(bewerber: Bewerber): void {
    const bewerberRef = ref(database, 'bewerber/' + bewerber.name);
    set(bewerberRef, bewerber).then(() => {
        console.log('Daten erfolgreich gespeichert.');
    }).catch((error) => {
        console.error('Fehler beim Speichern der Daten', error);
    });
}

// Funktion zum Verarbeiten der geladenen Bewerberdaten.
function handleBewerber(data: Bewerber[]): void {
    let bewerberName = new URLSearchParams(window.location.search).get("bewerber");
    let currentBewerber = data.find(bewerber => bewerber.name === bewerberName);
    if (currentBewerber) {
        nameElement.innerText = currentBewerber.name;
        // ...weitere Zuweisungen zu Elementen hier...
    }
}

// Event-Listener für den Speicherbutton.
let unlockButton: HTMLButtonElement = document.getElementById("noteButton") as HTMLButtonElement;
unlockButton.addEventListener('click', () => {
    // Logik, um die Daten aus Ihren Eingabefeldern zu sammeln.
    let bewerberData: Bewerber = {
        pic: "Pfad/zum/Bild", // Ersetzen Sie diesen Pfad durch den tatsächlichen Bildpfad.
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
    } else {
        saveBewerberData(bewerberData);
        unlockButton.innerText = "Bearbeiten";
    }
});

// Funktion zum initialen Laden der Bewerberdaten.
getData().catch(console.error);
