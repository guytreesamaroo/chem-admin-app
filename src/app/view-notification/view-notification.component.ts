import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Notification} from '../models/notification';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})

export class ViewNotificationComponent {
  notifList$: Observable<Notification[]>;

  constructor(private _pushpull: PushpullService) {
    this.notifList$ = this._pushpull.getModel('notifications');
  }
}
