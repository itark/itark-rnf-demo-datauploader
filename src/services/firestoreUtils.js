const db = require("./db");

exports.set = (data, collectionKey) => {

    try {
        if (data && (typeof data === "object")) {
          Object.keys(data).forEach(docKey => {
                db.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
                    console.log("Document " + docKey + " successfully written!");
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });
            });
        }
      } catch (err) {
        throw err;
      }

}

