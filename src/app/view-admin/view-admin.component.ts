import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Admin} from '../models/admin';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent {
  adminList$: Observable<Admin[]>;

  constructor(private _pushpull: PushpullService) {
    this.adminList$ = this._pushpull.getModel('administrators');
  }
}
