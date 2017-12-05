import { Component } from '@angular/core';
import {Student} from '../models/student';

import {AuthService} from '../auth.service';
import {PushpullService} from '../pushpull.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent {
  constructor(private _pushpull: PushpullService, private _auth: AuthService) { }

  statuses = ['PostGraduate', 'UnderGraduate'];
  departments = ['Chemistry'];
  student = new Student(0, '', '', '', '', '', '', '', );
  submitted = false;

  email: string;
  password: string;

  studentSubmit(form: NgForm) {
    this._auth.register(this.email, this.password);
    this._pushpull.insertStudent(form.value);
  }

  get diagnostic() {
    return JSON.stringify(this.student);
  }
}
