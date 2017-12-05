import { Component } from '@angular/core';

import { Course } from '../models/course';

import { PushpullService } from '../pushpull.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css']
})
export class FormCourseComponent {
  constructor(private _pushpull: PushpullService) { }

  course = new Course('',  1, '', '', '', '', '', '', 0, 0);
  credits = [1, 2, 3, 4, 5, 6];
  years = [1, 2, 3];

  departments = ['Chemistry'];
  lecturers = ['Mr. Defreitas', 'Mr. Goodridge'];
  degrees = ['Bsc. Chemistry (Major)', 'Bsc. S Chemistry'];
  tutors = [1, 2, 3, 4, 5, 6];

  courseSubmit(form: NgForm) {
    this._pushpull.insertCourse(form.value);
  }
}
