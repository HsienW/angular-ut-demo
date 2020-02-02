import {NgModule} from '@angular/core';

import {SimpleComponentCounterComponent} from './simple-component-counter.component';


@NgModule({
  imports: [],
  declarations: [
    SimpleComponentCounterComponent
  ],
  providers: [],
  exports: [
    SimpleComponentCounterComponent
  ],
  bootstrap: [SimpleComponentCounterComponent]
})
export class SimpleComponentCounterModule {
}
