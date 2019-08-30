import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const modules = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSelectModule,
  MatSnackBarModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
