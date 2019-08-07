import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {
  processName = 'update';
  @Input() places$?: Observable<Place[]>;
  @Output() updatePlaceEvent: EventEmitter<Place> = new EventEmitter();
  @Output() deletePlaceEvent: EventEmitter<Place> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  delete(event: MouseEvent, place: Place) {
    event.stopPropagation();
    this.deletePlaceEvent.emit(place);
  }
  update(place: Place) {
    this.updatePlaceEvent.emit(place);
  }
}
