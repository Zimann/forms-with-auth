import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter();
  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
      const clickedInside = this.elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(true);
        console.log('what happens here??');
      }
  }
}
