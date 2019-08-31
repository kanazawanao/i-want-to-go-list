import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const weatherNews = functions.https.onRequest((request, response) => {
  const lat = request.query.lat;
  const lng = request.query.lng;
  console.log(lat + lng);
  response.send(lat + lng);
});
