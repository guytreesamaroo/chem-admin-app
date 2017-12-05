import { Component } from '@angular/core';

import { PushpullService } from '../pushpull.service';

import { AngularFireList } from 'angularfire2/database';
import { MatTableDataSource } from '@angular/material';

import {Resource} from '../models/resource';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-resource',
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.css']
})
export class ViewResourceComponent {
  resourceList$: Observable<Resource[]>;

  constructor(private _pushpull: PushpullService) {
    this.resourceList$ = this._pushpull.getModel('resources');
  }
}
