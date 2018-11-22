import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class CustomCommonModule { }
