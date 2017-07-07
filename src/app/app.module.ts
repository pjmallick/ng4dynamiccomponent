import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HitmeDirective } from './hitme.directive/hitme.directive';
import { HitcounterComponent } from './hitcounter/hitcounter.component';

@NgModule({
  declarations: [
    AppComponent,
    HitmeDirective,
    HitcounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ HitcounterComponent ],
})
export class AppModule { }
