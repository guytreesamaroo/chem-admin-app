import { Component, OnInit } from '@angular/core';

import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent {
  models= CourseComponent[10];

  credits=[1,2,3,4,5,6];

  years=[1,2,3];

  departments=['Chemistry'];

  faculties=['Faculty of Science and Technology','Faculty of Food and Agriculture'];

  semesters=[1,2,3];

    model = new CourseComponent('chem1000','chem1000','Intro to Chem',1,3,1,'FST','John Doe','Mon 12to1','ChemOffice','none','Chemistry','none');

    submitted = false;

    newHero() {
      this.model = new CourseComponent('','','',1,3,1,'','','','','','','');

    }

    onSubmit() {
      console.log(this.model);
      this.models.push(this.model);
      this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
