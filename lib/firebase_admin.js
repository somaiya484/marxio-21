import admin from "firebase-admin";
import serviceAccount from './firebaseServiceAccount.json';  // Import JSON file directly from lib

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),  // Use the imported JSON directly
  });
}

export const adminDB = admin.firestore();
