import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import {AsynchronousComponent} from './asynchronous.component';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsynchronousComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'changeAsync' function testing`, () => {
    it('#changeAsync message should change to success', fakeAsync(() => {
      component.changeAsync();
      tick(1000);
      expect(component.message).toBe('change-1');
      tick(2000);
      expect(component.message).toBe('change-2');
    }));

    it('#changeAsync Unable to determine time', fakeAsync(() => {
      spyOn(component, 'changeAsync').and.callFake(() => {
        setTimeout(() => {
          component.message = 'change-1';
        });
      });
      component.changeAsync();
      tick();
      expect(component.message).toBe('change-1');
    }));
  });
});
