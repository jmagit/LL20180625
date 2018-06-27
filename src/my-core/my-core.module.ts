import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PIPES_CADENAS],
  exports: [PIPES_CADENAS]
})
export class MyCoreModule { }
