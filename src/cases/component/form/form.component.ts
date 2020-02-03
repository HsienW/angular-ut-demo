import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  loginForm: FormGroup;

  constructor(login: FormBuilder) {

    this.loginForm = login.group({
      name: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      email: ['', Validators.email]
    });

  }

}
