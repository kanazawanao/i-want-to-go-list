import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Place } from '../models/place';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private collection: AngularFirestoreCollection<Place>;
  constructor(private afStore: AngularFirestore) {
    this.collection = this.afStore.collection<Place>('places');
  }

  addPlace(place: Place): void {
    const id = (place.id = this.afStore.createId());
    this.collection
      .doc(id)
      .set(Object.assign({}, JSON.parse(JSON.stringify(place))));
  }

  updatePlace(place: Place) {
    this.collection
      .doc(place.id)
      .update(Object.assign({}, JSON.parse(JSON.stringify(place))));
  }

  getAllPlace(): Observable<Place[]> {
    return this.collection.valueChanges();
  }

  searchPlacesByUserId(userId: string): Observable<Place[]> {
    return this.collection
      .valueChanges()
      .pipe(map(p => p.filter(i => i.userId === userId)));
  }

  deletePlace(place: Place) {
    this.collection.doc(place.id).delete();
  }
}
