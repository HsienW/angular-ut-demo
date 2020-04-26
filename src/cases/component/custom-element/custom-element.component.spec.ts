import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// first type
import {NO_ERRORS_SCHEMA} from '@angular/core';
// second type
import {Component} from '@angular/core';

import {CustomElementComponent} from './custom-element.component';

// second type
@Component({selector: 'app-counter', template: ''})
class CounterComponent {
}

@Component({selector: 'app-form', template: ''})
class FormComponent {
}

describe('CustomElementComponent', () => {
  let component: CustomElementComponent;
  let fixture: ComponentFixture<CustomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomElementComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'render' testing`, () => {
    it(`should make render 'counterElement' value is 0`, () => {
      const counterElement = HTMLElement = fixture.nativeElement.querySelector('app-counter');
      expect(counterElement.counter).toBe(0);
    });
  });
});
