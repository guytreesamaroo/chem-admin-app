import { Course } from '../models/course';
import { Lecturer } from '../models/lecturer';
import { Student } from '../models/student';
import { Tutor } from '../models/tutor';
import { Event } from '../models/event';
import { Resource } from '../models/resource';

export class Admin {
  $key: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  department: string;

  myCourses: Course[];
  admins: Admin[];
  lecturers: Lecturer[];
  students: Student[];
  resources: Resource[];
  events: Event[];

  constructor(
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    email: string,
    department: string) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
    this.department = department;
  }
}
