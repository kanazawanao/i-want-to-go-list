import { Component, OnInit, Input } from '@angular/core';
import { CATEGORIES, Category } from './categories';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  @Input() place: Place = new Place();
  categories: Category[] = CATEGORIES;
  constructor() {}

  ngOnInit() {}
}
