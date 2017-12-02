import { Component} from '@angular/core';

// import { LecturerComponent } from '../lecturer/lecturer.component';

@Component({
  selector: 'app-lecturer-form',
  templateUrl: './lecturer-form.component.html',
  styleUrls: ['./lecturer-form.component.css']
})
export class LecturerFormComponent {

  // model = new LecturerComponent('John Doe', 'JohnDoe@gmail.com','JohDoe');

  submitted = false;

  newLecturer() {
    // this.model = new LecturerComponent('','','');
  }

  onSubmit() {
    // console.log(this.model);
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return '';
    // return JSON.stringify(this.model);
  }
}
