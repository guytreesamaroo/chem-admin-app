import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Student} from '../models/student';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})

export class ViewStudentComponent {
  studentList$: Observable<Student[]>;

  constructor(private _pushpull: PushpullService) {
    this.studentList$ = this._pushpull.getModel('students');
  }
}
