import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuiltInComponent} from './built-in.component';

describe('BuiltInComponent', () => {
  let component: BuiltInComponent;
  let fixture: ComponentFixture<BuiltInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltInComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'letter' pipe testing`, () => {
    it('should render title in a div tag', () => {
      const value: HTMLElement = fixture.debugElement.nativeElement.querySelector('.original');
      expect(value.textContent).toContain('Welcome to PURE PIPE unit test');
    });

    it('should have as title PIPE UNIT TEST', () => {
      const value: HTMLElement = fixture.debugElement.nativeElement.querySelector('.uppercase');
      expect(value.textContent).toContain('Welcome to PURE PIPE UNIT TEST');
    });

    it('should have as title pipe unit test', () => {
      const value: HTMLElement = fixture.debugElement.nativeElement.querySelector('.lowercase');
      expect(value.textContent).toContain('Welcome to pure pipe unit test');
    });
  });
});
