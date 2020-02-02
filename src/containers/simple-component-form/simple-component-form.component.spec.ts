import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleComponentFormComponent} from './simple-component-form.component';
import {ReactiveFormsModule} from '@angular/forms';


describe('SimpleComponentFormComponent', () => {
  let component: SimpleComponentFormComponent;
  let fixture: ComponentFixture<SimpleComponentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [SimpleComponentFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
    emailControl.setValue('joe@gmail.com');
    expect(emailControl.valid).toBeTruthy();
  });

});
