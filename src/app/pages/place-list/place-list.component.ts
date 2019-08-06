import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Observable, Subscription } from 'rxjs';
import { Place } from 'src/app/models/place';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit, OnDestroy {
  places$?: Observable<Place[]>;
  selectedPlace: Place | null = null;
  subscriptions: Subscription[] = [];
  constructor(
    private placeService: PlaceService,
    private auth: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.places$ = this.placeService.searchPlacesByUserId(this.auth.userId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  delete(event: MouseEvent ,place: Place) {
    event.stopPropagation();
    this.placeService.deletePlace(place);
    this.openSnackBar('deleted');
    this.selectedPlace = null;
  }

  update(place: Place) {
    this.placeService.updatePlace(place);
    this.openSnackBar('updated');
  }

  onSelect(place: Place) {
    this.selectedPlace = place;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
