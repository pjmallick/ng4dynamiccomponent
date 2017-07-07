import { Directive, HostListener, ElementRef,ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appHitme]'
})
export class HitmeDirective {

   constructor(public viewContainerRef: ViewContainerRef) { }
    @HostListener('click', ['$event']) onClick(event: KeyboardEvent) {
        alert('clicked');

       
    }


}
