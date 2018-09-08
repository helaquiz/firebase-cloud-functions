"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const firebaseAdmin = require("firebase-admin");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
firebaseAdmin.initializeApp(functions.config().firebase);
exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log(request);
    console.log(`hi`, functions.config());
    response.send("Hello from Firebase!");
});
//# sourceMappingURL=index.js.map