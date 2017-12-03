import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})

export class LecturerComponent {
  key: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  department: string;
  // myCourses: CourseComponent[];

  constructor(
    firstName: string, lastName: string,
    userName: string, password: string, email: string,
    key: string, department: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.userName = userName;
    this.password = password;
    this.email = email;

    this.key = key;
    this.department = department;
  }
}
