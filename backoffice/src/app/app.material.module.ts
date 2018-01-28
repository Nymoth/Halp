import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,

    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,

    MatInputModule
  ]
})
export class AppMaterialModule { }
