import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Observable } from 'rxjs';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {
  items$?: Observable<Place[]>;
  selectedPlace: Place | null = null;
  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.items$ = this.placeService.getAllPlace();
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
