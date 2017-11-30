import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id: number;
  name: string;
  password: string;
  email:string;
  department:string;
  degree:string;
  status:string;


  constructor(
    id: number,
    name: string,
    password: string,
    email:string,
    department:string,
    degree:string,
    status:string,) { 
      this.id=id;
      this.name=name;
      this.password=password;
      this.email=email;
      this.department=department;
      this.degree=degree;
      this.status=status;

  }

  ngOnInit() {
  }

}
