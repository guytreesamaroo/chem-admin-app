import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Lecturer} from '../models/lecturer';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-view-lecturer',
  templateUrl: './view-lecturer.component.html',
  styleUrls: ['./view-lecturer.component.css']
})

export class ViewLecturerComponent {
  lecturerList$: Observable<Lecturer[]>;

  constructor(private _pushpull: PushpullService) {
    this.lecturerList$ = this._pushpull.getModel('lecturers');
  }
}
