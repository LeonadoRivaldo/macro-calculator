import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMacrosComponent } from './view-macros/view-macros.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ViewMacrosComponent],
  exports: [ViewMacrosComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class MacrosModule { }
