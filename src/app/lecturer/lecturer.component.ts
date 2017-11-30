import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {
    username: string;
    password: string;
    email:string;
    constructor(
        username:string,
        email:string,
        password:string,
    ){
        this.username=username;
        this.password=password;
        this.email=email;
    }


  ngOnInit() {
  }

}
