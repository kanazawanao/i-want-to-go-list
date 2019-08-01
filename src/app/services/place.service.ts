import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
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
    this.collection.doc(place.id).update(place);
  }

  getAllPlace() {
    return this.collection.valueChanges();
  }

  deletePlace(place: Place) {
    this.collection.doc(place.id).delete();
  }
}
