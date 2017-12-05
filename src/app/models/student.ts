import {Course} from '../models/course';

export class Student {
  $key: string;
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  department: string;
  degree: string;
  status: string;
  myCourses: Course[];

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    password: string,
    email: string,
    department: string,
    degree: string,
    status: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.email = email;
    this.department = department;
    this.degree = degree;
    this.status = status;
  }
}
