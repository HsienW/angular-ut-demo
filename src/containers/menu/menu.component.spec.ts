import {async, TestBed} from '@angular/core/testing';
import {MenuComponent} from './menu.component';

describe('MenuComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
    }).compileComponents();
  }));

  it('should create the menu', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
