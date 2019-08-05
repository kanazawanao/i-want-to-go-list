import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-place-random',
  templateUrl: './place-random.component.html',
  styleUrls: ['./place-random.component.scss']
})
export class PlaceRandomComponent implements OnInit {
  placeSearchCondition: Place = new Place();
  results$?: Observable<Place[]>;
  selectedPlace: Place | null = null;
  constructor(private placeService: PlaceService, private auth: AuthService) {
    this.placeSearchCondition.userId = this.auth.userId;
  }

  ngOnInit() {}

  search() {
    // TODO: 検索中であることを表示できたら嬉しい
    this.results$ = this.placeService.searchPlaces(this.placeSearchCondition);
    // TODO: 検索結果が０件の場合の処理実装したい
  }

  onSelect(place: Place) {
    this.selectedPlace = place;
  }
}
