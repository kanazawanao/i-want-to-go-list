import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  // private itemDocument: AngularFirestoreDocument<Place>;
  private collection: AngularFirestoreCollection<Place>;
  constructor(private afStore: AngularFirestore) {
    this.collection = this.afStore.collection<Place>('places');
  }

  addPlace(place: Place): void {
    const id = this.afStore.createId();
    place.id = id;
    this.collection.doc(id).set(place);
  }

  updatePlace(place: Place) {
    const docUser: AngularFirestoreDocument<Place> = this.afStore.doc(`places/${place.id}`);
    const data: Place = {
      id: place.id,
      userId: place.userId, 
      addr: place.addr,
      place: place.place,
      prefectures: place.prefectures,
      went: place.went
    };
    return docUser.set(data);
  }

  getAllPlace() {
    return this.collection.valueChanges();
  }
}
