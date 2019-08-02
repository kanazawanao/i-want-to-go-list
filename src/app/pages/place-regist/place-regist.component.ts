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
  place: Place = {
    addr: '',
    id: '',
    place: '',
    prefectures: '',
    userId: '',
    went: false
  };
  uid = '';
  constructor(private placeService: PlaceService, private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(u => {
      if (u) {
        this.uid = u.uid;
      }
    });
  }

  regist() {
    this.place.userId = this.uid;
    this.placeService.addPlace(this.place);
  }
}
