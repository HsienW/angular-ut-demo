import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPipe} from './custom.pipe';


@NgModule({
  declarations: [CustomPipe],
  imports: [
    CommonModule
  ]
})
export class CustomModule {
}
