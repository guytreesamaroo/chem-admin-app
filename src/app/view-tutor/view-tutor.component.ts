import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Tutor} from '../models/tutor';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.css']
})

export class ViewTutorComponent {
  tutorList$: Observable<Tutor[]>;

  constructor(private _pushpull: PushpullService) {
    this.tutorList$ = this._pushpull.getModel('tutors');
  }
}
