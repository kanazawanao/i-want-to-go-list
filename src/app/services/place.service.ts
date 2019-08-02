import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Place } from '../models/place';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private collection: AngularFirestoreCollection<Place>;
  constructor(private afStore: AngularFirestore) {
    this.collection = this.afStore.collection<Place>('places');
  }

  addPlace(place: Place): void {
    const id = place.id = this.afStore.createId();
    this.collection.doc(id).set(place);
  }

  updatePlace(place: Place) {
    this.collection.doc(place.id).update(place);
  }

  getAllPlace() {
    return this.collection.valueChanges();
  }

  searchPlaces(userId: string) {
    return this.collection.valueChanges().pipe(map(p => p.filter(i => i.userId === userId)));
  }

  deletePlace(place: Place) {
    this.collection.doc(place.id).delete();
  }
}
