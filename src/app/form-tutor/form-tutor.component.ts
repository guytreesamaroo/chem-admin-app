import { Component, OnInit } from '@angular/core';
import {Tutor} from '../models/tutor';

import { PushpullService } from '../pushpull.service';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-tutor',
  templateUrl: './form-tutor.component.html',
  styleUrls: ['./form-tutor.component.css']
})

export class FormTutorComponent {
  constructor(private _pushpull: PushpullService, private _auth: AuthService) { }
  submitted = false;
  tutor = new Tutor('', '', '', '');
  departments = ['Chemistry'];
  faculties = ['Faculty of Science and Technology', 'Faculty of Food and Agriculture'];

  email: string;
  password: string;

  submitCourse(form: NgForm) {
    this._auth.register(this.email, this.password);
    this._pushpull.insertTutor(form.value);
  }
}
