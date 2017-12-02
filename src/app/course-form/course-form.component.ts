import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent {
  course = new CourseComponent('', '', 1, 3, [1], '', '', '', '', '', '', '');

  credits = [1, 2, 3, 4, 5, 6];
  years = [1, 2, 3];
  semesters = [1, 2, 3];

  departments = ['Chemistry'];
  faculties = ['Faculty of Science and Technology', 'Faculty of Food and Agriculture'];

  submitCourse() {
    alert('Submission to firebase via firebase module');
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.course);
  }
}
