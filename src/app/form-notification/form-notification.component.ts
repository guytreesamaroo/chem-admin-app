import { Component, OnInit } from '@angular/core';
import {Notification} from '../models/notification';
import { PushpullService } from '../pushpull.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.css']
})
export class FormNotificationComponent {
  constructor(private _pushpull: PushpullService) { }

  notif: Notification = new Notification('', Date.now().toString(), '');

  submitNotif(form: NgForm) {
    this._pushpull.insertNotification(form.value);
  }
}
