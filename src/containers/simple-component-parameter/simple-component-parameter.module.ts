import {NgModule} from '@angular/core';

import {SimpleComponentParameterComponent} from './simple-component-parameter.component';


@NgModule({
  imports: [],
  declarations: [
    SimpleComponentParameterComponent
  ],
  providers: [],
  exports: [
    SimpleComponentParameterComponent
  ],
  bootstrap: [SimpleComponentParameterComponent]
})
export class SimpleComponentParameterModule {
}
