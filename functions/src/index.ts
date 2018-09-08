import * as functions from 'firebase-functions';
import * as firebaseAdmin from 'firebase-admin';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

/** INITIALIZE FIREBASE  */
firebaseAdmin.initializeApp(functions.config().firebase);

/** CONFIGURE EXPRESS */
const server = express();
server.use(bodyParser.json({ limit: '10mb' }));
server.use(cors());

/** SERVER ROUTE */
server.use(Route);

export const api = functions.https.onRequest(server);

// export const helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });
