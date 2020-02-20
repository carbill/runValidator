import {NgModule} from '@angular/core';
import {RutPipe} from "./pipes/rut-pipe";
import {FormatRutDirective} from "./directives/format-rut.directive";

@NgModule({
    declarations: [
        FormatRutDirective,
        RutPipe
    ],
    providers: [
        RutPipe
    ]
})
export class RutModule {
}
