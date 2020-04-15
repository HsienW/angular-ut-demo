import {NgModule} from '@angular/core';

import {CounterTestbedComponent} from './counter-testbed.component';


@NgModule({
  imports: [],
  declarations: [
    CounterTestbedComponent
  ],
  providers: [],
  exports: [
    CounterTestbedComponent
  ],
  bootstrap: [CounterTestbedComponent]
})
export class CounterModule {
}
