import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormComponent} from './form.component';
import {ReactiveFormsModule} from '@angular/forms';


describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [FormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'render' testing`, () => {
    it('should create a form with 3 controls', () => {
      expect(component.loginForm.contains('name')).toBeTruthy();
      expect(component.loginForm.contains('password')).toBeTruthy();
      expect(component.loginForm.contains('email')).toBeTruthy();
    });

    it('should make the name control required', () => {
      const nameControl = component.loginForm.get('name');
      nameControl.setValue('');
      expect(nameControl.valid).toBeFalsy();
    });

    it('should use password with minimum 8 characters', () => {
      const passwordControl = component.loginForm.get('password');
      passwordControl.setValue('12345678');
      expect(passwordControl.valid).toBeTruthy();
    });

    it('should validate the email input type', () => {
      const emailControl = component.loginForm.get('email');
      emailControl.setValue('hello@gmail.com');
      expect(emailControl.valid).toBeTruthy();
    });
  });
});
