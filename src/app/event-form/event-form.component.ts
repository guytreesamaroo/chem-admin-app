import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  event: EventComponent = new EventComponent(0, '', Date.now().toString(), '', '', '', '');

  submitEvent() {
    alert(JSON.stringify(this.event));
  }

  get Diagnostics() {
    return JSON.stringify(this.event);
  }
}
