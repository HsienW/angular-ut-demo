import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SimpleComponentFormComponent} from './simple-component-form.component';


@NgModule({
  declarations: [SimpleComponentFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SimpleComponentFormModule {
}
