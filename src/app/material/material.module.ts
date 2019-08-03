import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatIconModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
