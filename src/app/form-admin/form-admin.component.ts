import { Component, OnInit } from '@angular/core';

import {Admin} from '../models/admin';
import {PushpullService} from '../pushpull.service';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})

export class FormAdminComponent {
  constructor(private _pushpull: PushpullService, private _auth: AuthService) { }

  admin = new Admin('', '', '', '', '', '');
  departments = ['Chemistry'];
  faculties = ['Faculty of Science and Technology', 'Faculty of Food and Agriculture'];

  email: string;
  password: string;

  adminSubmit(form: NgForm) {
    this._auth.register(this.email, this.password);
    this._pushpull.insertAdministrator(form.value);
  }
}
