import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Observable, Subscription } from 'rxjs';
import { Place } from 'src/app/models/place';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit, OnDestroy {
  items$?: Observable<Place[]>;
  selectedPlace: Place | null = null;
  subscriptions: Subscription[] = [];
  uid = '';
  constructor(private placeService: PlaceService, private auth: AuthService) {}

  ngOnInit() {
    this.items$ = this.placeService.searchPlacesByUserId(this.auth.userId);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  delete(place: Place) {
    this.placeService.deletePlace(place);
    this.selectedPlace = null;
  }

  update(place: Place) {
    this.placeService.updatePlace(place);
  }

  onSelect(place: Place) {
    this.selectedPlace = place;
  }
}
