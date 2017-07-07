import { Component,ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HitmeDirective } from './hitme.directive/hitme.directive';
import { HitcounterComponent } from './hitcounter/hitcounter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 @ViewChild(HitmeDirective) appHitme: HitmeDirective;
  hitCounter: number =0;

constructor(private componentFactoryResolver: ComponentFactoryResolver){}
  addDynamicComponent(){
this.hitCounter ++;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(HitcounterComponent);

    let viewContainerRef = this.appHitme.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
      (<HitcounterComponent>componentRef.instance).counter = this.hitCounter;
  
    
  }
}
