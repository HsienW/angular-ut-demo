import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicValueComponent} from './dynamic-value.component';

describe('DynamicValueComponent', () => {
  let component: DynamicValueComponent;
  let fixture: ComponentFixture<DynamicValueComponent>;

  const forTestingDate = Date.now();
  const forReductionDate = Date.now();

  let foo = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // spyOn(Date, 'now').and.returnValue(1547717952668);
  });

  afterEach(() => {
    foo.setBar.isSpy = false;
    console.log('結束前結束前結束前結束前');
    console.log(foo.setBar());
    // global.Date.now = NOW_TO_CACHE;
  });

  it('should create', () => {
    console.log('我確認create 我確認create 我確認create');
    expect(component).toBeTruthy();
  });

  it('should return test #######01', () => {

    foo = {
      setBar: function () {
        return '123';
      }
    };

    spyOn(foo, 'setBar').and.callFake(() => {
      return '789';
    });
    // const aaa = spyOn(Date, 'now').and.callFake(() => {
    //   return 1547717952669;
    // });

    console.log('我是一我是一我是一我是一我是一');
    console.log();

    // const dateValue = component.getCurrentDate();
    // expect(dateValue).toEqual(forTestingDate);
  });

  // it('should return test #######02', function () {
  //   foo.setBar.isSpy = false;
  //
  //   spyOn(foo, 'setBar').and.callFake(() => {
  //     return '000';
  //   });
  //
  //   console.log('我是二我是二我是二我是二我是二');
  //   console.log(foo.setBar());
  // });

});
