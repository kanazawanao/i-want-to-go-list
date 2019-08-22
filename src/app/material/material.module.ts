import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatIconModule,
  MatMenuModule,
  MatCheckboxModule,
  MatInputModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatCardModule,
  DragDropModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
