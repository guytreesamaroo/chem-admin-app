import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-notification-form',
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.css']
})
export class NotificationFormComponent {
  notif: NotificationComponent = new NotificationComponent('', Date.now().toString(), '');

  submitNotif() {
    alert(JSON.stringify(this.notif));
  }
}
