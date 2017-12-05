import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Event} from '../models/event';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})

export class ViewEventComponent {
  eventList$: Observable<Event[]>;

    constructor(private _pushpull: PushpullService) {
      this.eventList$ = this._pushpull.getModel('events');
    }
}
