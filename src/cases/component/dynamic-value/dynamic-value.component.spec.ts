import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicValueComponent} from './dynamic-value.component';

describe('DynamicValueComponent', () => {
  let component: DynamicValueComponent;
  let fixture: ComponentFixture<DynamicValueComponent>;

  const testNowDate = global.Date.now;
  const reductionNowDate = global.Date.now;


  // const serviceMock = createSpyObj('service', ['methods', 'you', 'want', 'to', 'mock']);

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

  it('should return current date', () => {

    const mockDate = new Date(1466424490000);
    const spy = spyOn(global, 'Date').mockImplementation(() => testNowDate);

    expect(component).toBeTruthy();
  });

});
