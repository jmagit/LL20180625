import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer.component';
import { MIS_VALIDADORES } from './directives/validadores.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PIPES_CADENAS, SizerComponent, MIS_VALIDADORES],
  exports: [PIPES_CADENAS, SizerComponent, MIS_VALIDADORES]
})
export class MyCoreModule { }
