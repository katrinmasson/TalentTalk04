import { getDatabase, ref, get, DataSnapshot } from "firebase/database";
import { initializeApp } from 'firebase/app';


    // Beispiel für Bewerberdaten
    interface Bewerber {
        name: string;
    }

    // Ihre Firebase-Konfiguration
    const firebaseConfig = {
        // Ihre Konfigurationswerte
    };

    // Initialisieren Sie Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    listenInfo();

    function listenInfo(): void {
        getDataFromFirebase();
    }

    // Funktion, um Daten aus Firebase Realtime Database zu laden
    async function getDataFromFirebase(): Promise<void> {
        const bewerberRef = ref(database, 'bewerber');
        try {
            const snapshot: DataSnapshot = await get(bewerberRef);
            if (snapshot.exists()) {
                const data: Record<string, Bewerber> = snapshot.val();
                handleListe(data);
            } else {
                console.log("Keine Daten verfügbar");
            }
        } catch (error) {
            console.error('Fehler beim Laden der Daten', error);
        }
    }

    function handleListe(data: Record<string, Bewerber>) {
        let liste = document.getElementById('liste');

        //füge für jeden ein <li>-Element hinzu
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const bewerber = data[key];
                let listItem = document.createElement('li');
                listItem.innerHTML = bewerber.name;
                if (liste) {
                    liste.appendChild(listItem);
                }
                listItem.addEventListener("click", () => { window.open("index.html?bewerber=" + bewerber.name, "_self") });
            }
        }
    }
