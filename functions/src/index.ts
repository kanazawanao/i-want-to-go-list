import * as functions from 'firebase-functions';
import * as https from 'https';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const weatherNews = functions.https.onRequest((request, response) => {
  response.send(JSON.stringify(https.get('https://api.darksky.net/forecast/ec433e0db67e52ffac1fa8a328e3cb0f/37.8267,-122.4233')));
});
