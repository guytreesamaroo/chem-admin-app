import { Component, OnInit } from '@angular/core';

import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  status=['PostGraduate','UnderGraduate'];

  departments=['Chemistry'];

  model = new StudentComponent(999999999,'Joe Doe','password','joe.doe@sta.uwi.edu','Chemistry','Bsc.','UnderGraduate');
  
    submitted = false;

    newStudent() {
      this.model = new StudentComponent(0,'','','','','','');
      
    }
  
    onSubmit() { 
      console.log(this.model);
      this.submitted = true; 
    }
  
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); 
  }
}
