import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  @Input() place: Place;
  constructor() {}

  ngOnInit() {}
}
