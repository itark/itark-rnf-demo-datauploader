const db = require("./db");

const firestoreService = require('./firestoreService');


//https://levelup.gitconnected.com/firebase-import-json-to-firestore-ed6a4adc2b57

//Denna https://medium.com/@impaachu/how-to-upload-data-to-firebase-firestore-cloud-database-63543d7b34c5

// exports.set = (data, collectionKey) => {

//     try {
//         if (data && (typeof data === "object")) {
//           Object.keys(data).forEach(docKey => {
//                 db.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
//                     console.log("Document " + docKey + " successfully written!");
//                 }).catch((error) => {
//                     console.error("Error writing document: ", error);
//                 });
//             });
//         }
//       } catch (err) {
//         throw err;
//       }

// }


exports.restore = (data) => {
  try {
    console.log('Starting Upload');
    firestoreService.restore(data);
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

