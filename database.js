import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "database";
const firebaseConfig = {
// Deine Firebase-Konfiguration hier
};
// Initialisiere Firebase
const app = initializeApp(firebaseConfig);
// Erstelle eine Datenbank-Instanz
const database = getDatabase(app);
// Verwende die database-Instanz, um auf die Datenbank zuzugreifen
const bewerberRef = ref(database, 'bewerber/');
//# sourceMappingURL=database.js.map