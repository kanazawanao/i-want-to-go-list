import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Place } from 'src/app/models/place';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {
  @Input() places$?: Observable<Place[]>;
  @Output() selectPlaceEvent: EventEmitter<Place> = new EventEmitter();
  @Output() deletePlaceEvent: EventEmitter<Place> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  delete(event: MouseEvent, place: Place) {
    event.stopPropagation();
    this.deletePlaceEvent.emit(place);
  }

  select(place: Place) {
    this.selectPlaceEvent.emit(place);
  }
}
