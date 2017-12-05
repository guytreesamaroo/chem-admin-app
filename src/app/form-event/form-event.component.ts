import { Component } from '@angular/core';
import {Event} from '../models/event';

import { PushpullService } from '../pushpull.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {
  constructor(private _pushpull: PushpullService) { }

  event: Event = new Event('', '', '', false, Date.now().toString(), Date.now().toString(), '');

  submitEvent(form: NgForm) {
    this._pushpull.insertEvent(form.value);
  }
}
