import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  id: number;
  name: string;
  dateTime: string;
  location: string;
  postedBy: string;
  hostedBy: string;
  description: string;

  constructor(id: number, name: string, dateTime: string, location: string, postedBy: string, hostedBy: string, description: string) {
    this.id = id;
    this.name = name;

    this.dateTime = dateTime;
    this.location = location;
    this.postedBy = postedBy;
    this.hostedBy = hostedBy;

    this.description = description;
  }
}
