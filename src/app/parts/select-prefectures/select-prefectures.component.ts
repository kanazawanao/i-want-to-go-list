import { Component, OnInit, Input } from '@angular/core';
import { Prefecture, PREFECTURES } from 'src/app/models/prefecture';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-select-prefectures',
  templateUrl: './select-prefectures.component.html',
  styleUrls: ['./select-prefectures.component.scss']
})
export class SelectPrefecturesComponent implements OnInit {
  @Input() place!: Place;
  prefectures: Prefecture[] = PREFECTURES;
  constructor() {}

  ngOnInit() {}
}
