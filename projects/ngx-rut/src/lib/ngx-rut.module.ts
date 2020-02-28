import { NgModule } from '@angular/core';
import { NgxRutComponent } from './ngx-rut.component';
import {FormatRutDirective} from './directives/format-rut.directive';
import {RutPipe} from './pipes/rut-pipe';



@NgModule({
  declarations: [
    FormatRutDirective,
    RutPipe,
    NgxRutComponent,
  ],
  imports: [
  ],
  exports: [NgxRutComponent],
  providers: [RutPipe]
})
export class NgxRutModule { }
