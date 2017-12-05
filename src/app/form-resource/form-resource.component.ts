import { Component } from '@angular/core';
import {Resource} from '../models/resource';

import { PushpullService } from '../pushpull.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-resource',
  templateUrl: './form-resource.component.html',
  styleUrls: ['./form-resource.component.css']
})
export class FormResourceComponent {
  constructor(private _pushpull: PushpullService) { }

  submitted = false;
  resource = new Resource('', '', null);

  resourceSubmit(form: NgForm) {
    this._pushpull.insertResource(form.value);
  }
}
