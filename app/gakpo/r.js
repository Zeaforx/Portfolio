import { doc, setDoc } from "firebase/firestore";

const cityRef = doc(db, "contactFormData", "BJ");
setDoc(cityRef, { capital: true }, { merge: true });
