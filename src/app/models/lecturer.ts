import {Course} from '../models/course';

export class Lecturer {
  $key: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  department: string;

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
