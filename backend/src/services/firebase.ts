import admin, { ServiceAccount } from "firebase-admin";

import serviceAccount from "../configs/firebase.json";

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount as ServiceAccount),
	databaseURL: process.env.FIREBASE_URL,
});

export default admin;
