import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// first type
import {NO_ERRORS_SCHEMA} from '@angular/core';
// second type
import {Component} from '@angular/core';

import {NestedComponent} from './nested.component';

// second type
@Component({selector: 'app-counter', template: ''})
class CounterComponent {
}

@Component({selector: 'app-form', template: ''})
class FormComponent {
}

describe('NestedComponent', () => {
  let component: NestedComponent;
  let fixture: ComponentFixture<NestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NestedComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check render My name is Nested', () => {
    const type1Value: HTMLElement = fixture.nativeElement.querySelector('p');
    const type2Value = component.nested;
    expect(type1Value.textContent).toContain('My name is Nested');
    expect(type2Value).toBe('My name is Nested');
  });

});
