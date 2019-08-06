import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-place-random',
  templateUrl: './place-random.component.html',
  styleUrls: ['./place-random.component.scss']
})
export class PlaceRandomComponent implements OnInit, OnDestroy {
  placeSearchCondition: Place = new Place();
  results$?: Observable<Place[]>;
  selectedPlace: Place | null = null;
  subscriptions: Subscription[] = [];
  constructor(
    private placeService: PlaceService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.placeSearchCondition.userId = this.auth.userId;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  search() {
    // TODO: 検索中であることを表示できたら嬉しい
    this.results$ = this.placeService.searchPlaces(this.placeSearchCondition);
    this.openSnackBar('searched');
    // TODO: 検索結果が０件の場合の処理実装したい
  }

  onSelect(place: Place) {
    this.selectedPlace = place;
  }

  random() {
    const allPlaces$ = this.placeService.searchPlaces(this.placeSearchCondition);
    allPlaces$.subscribe(a => {
      this.selectedPlace = a[Math.floor(Math.random() * a.length)];
    });
    this.openSnackBar('selected');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
