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
  selectedPlace?: Place;
  places$?: Observable<Place[]>;
  constructor(
    private placeService: PlaceService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.placeSearchCondition.userId = this.auth.userId;
  }

  ngOnInit() {}

  select(place: Place) {
    this.selectedPlace = place;
  }

  delete(place: Place) {
    this.placeService.deletePlace(place);
    this.openSnackBar('deleted');
    this.selectedPlace = undefined;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }

  update(place: Place) {
    this.placeService.updatePlace(place);
    this.openSnackBar('updated');
  }

  search() {
    // TODO: 検索中であることを表示できたら嬉しい
    this.places$ = this.placeService.searchPlaces(this.placeSearchCondition);
    this.selectedPlace = undefined;
    this.openSnackBar('searched');
    // TODO: 検索結果が０件の場合の処理実装したい
  }

  random() {
    this.places$ = undefined;
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
  }
}
