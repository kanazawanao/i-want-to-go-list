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
    addr:'',
    id:'',
    place:'',
    prefectures:'',
    userId:'',
    went:false
  };
  uid = '';
  constructor(
    private placeService: PlaceService,
    public auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(u => this.uid = u.uid);
  }

  regist() {
    console.log('登録実行！');

    // const place = this.placeRegistForm.get('place').value;
    // const prefectures = this.placeRegistForm.get('prefectures').value;
    // const addr = this.placeRegistForm.get('addr').value;
    this.place.userId = this.uid;
    console.log(this.place);
    this.placeService.addPlace(this.place);
    // const went = this.placeRegistForm.get('went');
  }
}
