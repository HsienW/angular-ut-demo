import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ParameterComponent} from './parameter.component';

describe('ParameterComponent', () => {
  let component: ParameterComponent;
  let fixture: ComponentFixture<ParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParameterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'getTrapezoidArea' function testing`, () => {
    it('#getTrapezoidArea should return area equal or greater than 25', () => {
      const areaResult = component.getTrapezoidArea(2, 3, 10);
      expect(areaResult).toBeGreaterThanOrEqual(25);
    });
  });
});
