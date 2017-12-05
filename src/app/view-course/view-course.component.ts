import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Course} from '../models/course';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})

export class ViewCourseComponent {
  // displayedColumns = ['code', 'name', 'year', 'credits', 'semester',
  // 'faculty', 'lecturer', 'officeHours', 'officeLocation', 'department',
  // 'description'];

  // dataSource = new MatTableDataSource<Observable<Course>>(this.courseList);

  courseList$: Observable<Course[]>;

  constructor(private _pushpull: PushpullService) {
    this.courseList$ = this._pushpull.getModel('courses');
  }
}
