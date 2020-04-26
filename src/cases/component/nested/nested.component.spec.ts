import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NestedComponent} from './nested.component';


describe('NestedComponent', () => {
  let component: NestedComponent;
  let fixture: ComponentFixture<NestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NestedComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'render' testing`, () => {
    it(`should make render 'My name is Nested'`, () => {
      const childHtmlElement: HTMLElement = fixture.nativeElement.querySelector('p');
      expect(childHtmlElement.textContent).toContain('My name is Nested');
    });
  });
});
