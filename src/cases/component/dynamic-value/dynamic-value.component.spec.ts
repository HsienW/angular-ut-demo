import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicValueComponent} from './dynamic-value.component';

describe('DynamicValueComponent', () => {
  let component: DynamicValueComponent;
  let fixture: ComponentFixture<DynamicValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'randomNumber' function testing`, () => {
    it('#randomNumber should return right five digits number', () => {
      spyOn(component, 'randomNumber').and.returnValue(12345);
      const value = component.randomNumber(1, 99999);
      expect(value).toEqual(12345);
    });
  });
});
