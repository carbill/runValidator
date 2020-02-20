import {Directive, ElementRef, HostListener} from '@angular/core';
import {RutPipe} from "../pipes/rut-pipe";

@Directive({
  selector: '[appFormatRut]'
})
export class FormatRutDirective {

  constructor(private elementRef: ElementRef, private rutPipe: RutPipe) {
  }

  @HostListener('focus', ["$event.target.value"]) onEnter(value) {
    const rut = value.replace(/\./g, '');
    this.elementRef.nativeElement.value = rut.replace(/-/g, '');
  }

  @HostListener('blur', ["$event.target.value"]) onLeave(value) {
    this.elementRef.nativeElement.value = this.rutPipe.transform(value).toUpperCase();
  }
}
