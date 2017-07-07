import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHitme]'
})
export class HitmeDirective {

   constructor(private el: ElementRef) { }
    @HostListener('click', ['$event']) onClick(event: KeyboardEvent) {
        alert('clicked');
    }


}
