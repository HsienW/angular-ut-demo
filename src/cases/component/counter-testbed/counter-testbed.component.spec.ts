import {CounterTestbedComponent} from './counter-testbed.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('CounterTestbedComponent', () => {
  let component: CounterTestbedComponent;
  let fixture: ComponentFixture<CounterTestbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CounterTestbedComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTestbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`function testing`, () => {
    it('should check incremented value is 1', () => {
      const counterValue = component.increaseCounter();
      expect(counterValue).toBe(1);
    });

    it('should check decremented value is -1', () => {
      const counterValue = component.decreaseCounter();
      expect(counterValue).toBe(-1);
    });
  });
});
