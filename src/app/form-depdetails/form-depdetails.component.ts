import { Component } from '@angular/core';
import { PushpullService } from '../pushpull.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-form-depdetails',
  templateUrl: './form-depdetails.component.html',
  styleUrls: ['./form-depdetails.component.css']
})

export class FormDepdetailsComponent {
  constructor(private _pushpull: PushpullService) { }
  details: string;

  submitDetails(form: NgForm) {
    this._pushpull.insertDepdetails(form.value);
  }
}
