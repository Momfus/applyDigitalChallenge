import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule, MatButtonModule, MatCardModule],
  exports: [MatSnackBarModule, MatButtonModule, MatCardModule],
})
export class AngularMaterialModule {}
