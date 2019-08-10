import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceService } from 'src/app/services/place.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  processName = 'update';
  placeSearchCondition: Place = new Place();
  waypoints = '';
  selectedPlace?: Place;
  destinations: Place[] = [];
  places$?: Observable<Place[]>;
  get googleMapLinks(): string {
    return this.destinations.length !== 0
      ? 'https://www.google.com/maps/dir/?api=1' +
          this.waypoints +
          '&travelmode=driving'
      : '';
  }
  constructor(
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.placeSearchCondition.userId = this.auth.userId;
  }

  ngOnInit() {}

  select(place: Place) {
    this.places$ = undefined;
    this.selectedPlace = place;
  }

  delete(place: Place) {
    this.placeService.deletePlace(place);
    this.destinations.forEach((d, index) => {
      if (d.id === place.id) {
        this.destinations.splice(index, 1);
      }
    });
    this.openSnackBar('deleted');
    this.selectedPlace = undefined;
    this.createWayoption();
  }

  update(place: Place) {
    this.placeService.updatePlace(place);
    this.selectedPlace = undefined;
    this.updateDestination(place);
    this.openSnackBar('updated');
  }

  updateDestination(place: Place) {
    this.destinations.forEach((d, index) => {
      if (d.id === place.id) {
        this.destinations[index] = place;
      }
    });
    this.createWayoption();
  }

  addDestination(place: Place) {
    let deleted = false;
    this.destinations.forEach((d, index) => {
      if (d.id === place.id) {
        deleted = true;
        this.destinations.splice(index, 1);
      }
    });
    if (!deleted) {
      this.destinations.push(place);
    }
    this.createWayoption();
  }

  createWayoption() {
    let des: string[] = [];
    let lastPlace: Place = new Place();
    this.destinations.forEach((d, index) => {
      if (index === 0) {
        lastPlace = d;
      } else {
        des.push(d.addr);
      }
    });
    this.waypoints =
      '&destination=' + lastPlace.addr + '&waypoints=' + des.join(' | ');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }

  search() {
    // TODO: 検索中であることを表示できたら嬉しい
    this.places$ = this.placeService.searchPlaces(this.placeSearchCondition);
    this.selectedPlace = undefined;
    this.destinations = [];
    this.waypoints = '';
    this.openSnackBar('searched');
    // TODO: 検索結果が０件の場合の処理実装したい
  }

  random() {
    this.places$ = undefined;
    this.destinations = [];
    this.waypoints = '';
    const allPlaces$ = this.placeService.searchPlaces(
      this.placeSearchCondition
    );
    allPlaces$.subscribe(a => {
      this.selectedPlace = a[Math.floor(Math.random() * a.length)];
    });
    this.openSnackBar('selected');
  }

  clear() {
    this.selectedPlace = undefined;
    this.places$ = undefined;
    this.destinations = [];
    this.waypoints = '';
  }
}
