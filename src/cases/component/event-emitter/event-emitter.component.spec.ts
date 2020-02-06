import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventEmitterComponent} from './event-emitter.component';

describe('EventEmitterComponent', () => {
  let component: EventEmitterComponent;
  let fixture: ComponentFixture<EventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventEmitterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'incrementCounter' function testing`, () => {
    it('#incrementCounter should raise counterChanged event when incrementCounter fired', () => {
      let total = 0;
      component.counterChanged.subscribe(totalCount => {
        total = totalCount;
        component.incrementCounter();
        expect(total).toBe(1);
      });
    });
  });
});
