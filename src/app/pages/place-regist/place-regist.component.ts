import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-place-regist',
  templateUrl: './place-regist.component.html',
  styleUrls: ['./place-regist.component.scss']
})
export class PlaceRegistComponent implements OnInit {
  place: Place = new Place();
  constructor(private placeService: PlaceService, private auth: AuthService) {
    this.place.userId = this.auth.userId;
  }

  ngOnInit() {}

  regist() {
    this.placeService.addPlace(this.place);
    alert('registered');
    // TODO: 登録したら一覧画面に遷移する？
  }
}
