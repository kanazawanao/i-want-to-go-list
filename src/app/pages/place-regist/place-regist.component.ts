import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-place-regist',
  templateUrl: './place-regist.component.html',
  styleUrls: ['./place-regist.component.scss']
})
export class PlaceRegistComponent implements OnInit {
  placeRegistForm: FormGroup;

  place = new FormControl('');
  prefectures = new FormControl('');
  addr = new FormControl('');

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.placeRegistForm = this.fb.group({
      place: ['', [Validators.required]],
      prefectures: ['', [Validators.required]],
      addr: ['', [Validators.required]],
      went: ['', [Validators.required]]
    });
  }

  regist() {
    console.log('登録実行！');

    const place = this.placeRegistForm.get('place').value;
    const prefectures = this.placeRegistForm.get('prefectures').value;
    const addr = this.placeRegistForm.get('addr').value;

    // const went = this.placeRegistForm.get('went');
  }
}
