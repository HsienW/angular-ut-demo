import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-simple-component-form',
  templateUrl: './simple-component-form.component.html',
  styleUrls: ['./simple-component-form.component.css']
})
export class SimpleComponentFormComponent {

  loginForm: FormGroup;

  constructor(login: FormBuilder) {

    this.loginForm = login.group({
      name: ['', Validators.required],
      password: ['', Validators.minLength(8)],
      email: ['', Validators.email]
    });

  }

}
