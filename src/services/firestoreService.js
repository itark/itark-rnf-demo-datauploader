const admin = require('firebase-admin');
const firestoreService = require('firestore-export-import');
const serviceAccount = require("../serviceAccountKey.json");

console.log('Initialzing Firebase');
firestoreService.initializeApp(serviceAccount, "https://itark-demo.firebaseio.com");
console.log('Firebase Initialized');

module.exports = firestoreService;

