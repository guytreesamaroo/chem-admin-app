import { Component } from '@angular/core';
import {Lecturer} from '../models/lecturer';

import { PushpullService } from '../pushpull.service';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-lecturer',
  templateUrl: './form-lecturer.component.html',
  styleUrls: ['./form-lecturer.component.css']
})

export class FormLecturerComponent {
  constructor(private _pushpull: PushpullService, private _auth: AuthService) { }

  submitted = false;
  lecturer = new Lecturer('', '', '', '', '', '');
  departments = ['Chemistry'];
  faculties = ['Faculty of Science and Technology', 'Faculty of Food and Agriculture'];

  email: string;
  password: string;

  lecturerSubmit(form: NgForm) {
    this._auth.register(this.email, this.password);
    this._pushpull.insertLecturer(form.value);
  }
}
