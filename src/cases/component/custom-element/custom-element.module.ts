import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomElementComponent} from './custom-element.component';
import {CounterComponent} from '../counter/counter.component';
import {FormComponent} from '../form/form.component';


@NgModule({
  declarations: [
    CustomElementComponent,
    CounterComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomElementModule {
}
