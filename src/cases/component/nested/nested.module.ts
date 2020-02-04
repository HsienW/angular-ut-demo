import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NestedComponent} from './nested.component';
import {CounterComponent} from '../counter/counter.component';
import {FormComponent} from '../form/form.component';


@NgModule({
  declarations: [
    NestedComponent,
    CounterComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NestedModule {
}
