import {NgModule} from '@angular/core';

import {CounterComponent} from './counter.component';


@NgModule({
  imports: [],
  declarations: [
    CounterComponent
  ],
  providers: [],
  exports: [
    CounterComponent
  ],
  bootstrap: [CounterComponent]
})
export class CounterModule {
}
