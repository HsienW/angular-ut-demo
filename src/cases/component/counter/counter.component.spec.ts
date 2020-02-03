import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {

  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent();
  });

  it('should check incremented value is 1', () => {
    const counterValue = component.increaseCounter();
    expect(counterValue).toBe(1);
  });

  it('should check decremented value is -1', () => {
    const counterValue = component.decreaseCounter();
    expect(counterValue).toBe(-1);
  });

});
