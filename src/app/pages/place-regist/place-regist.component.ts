import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-place-regist',
  templateUrl: './place-regist.component.html',
  styleUrls: ['./place-regist.component.scss']
})
export class PlaceRegistComponent implements OnInit {
  place: Place = new Place();
  constructor(
    private placeService: PlaceService,
    private auth: AuthService,
    private _snackBar: MatSnackBar) {
    this.place.userId = this.auth.userId;
  }

  ngOnInit() {}

  regist() {
    this.placeService.addPlace(this.place);
    this.openSnackBar('registered');
    // TODO: 登録したら一覧画面に遷移する？
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
