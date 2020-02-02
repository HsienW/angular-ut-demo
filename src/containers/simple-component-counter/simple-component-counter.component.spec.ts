import {SimpleComponentCounterComponent} from './simple-component-counter.component';

describe('SimpleComponentCounterComponent', () => {

  let component: SimpleComponentCounterComponent;

  beforeEach(() => {
    component = new SimpleComponentCounterComponent();
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
