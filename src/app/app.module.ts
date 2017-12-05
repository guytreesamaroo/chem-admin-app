import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

/* Firebase Imports */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyA90GPBnK_AhvJ2yG9OLjmH3e3CeySSxL0',
  authDomain: 'chem-admin-app.firebaseapp.com',
  databaseURL: 'https://chem-admin-app.firebaseio.com',
  projectId: 'chem-admin-app',
  storageBucket: 'chem-admin-app.appspot.com',
  messagingSenderId: '695472243722'
};

/* Angular Material Imports */
import {
  MatSidenavModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~ CUSTOM-COMPONENT IMPORTS ~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* FORMS */
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { FormLecturerComponent } from './form-lecturer/form-lecturer.component';
import { FormEventComponent } from './form-event/form-event.component';
import { FormResourceComponent } from './form-resource/form-resource.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormTutorComponent } from './form-tutor/form-tutor.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormNotificationComponent } from './form-notification/form-notification.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { ViewLecturerComponent } from './view-lecturer/view-lecturer.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';
import { ViewResourceComponent } from './view-resource/view-resource.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewTutorComponent } from './view-tutor/view-tutor.component';
import { FormDepdetailsComponent } from './form-depdetails/form-depdetails.component';
import { ViewModelComponent } from './view-model/view-model.component';
import { FormsModule } from '@angular/forms';

/* SERVICES */
import { AuthService } from './auth.service';
import { PushpullService } from './pushpull.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FormAdminComponent,
    FormCourseComponent,
    FormLecturerComponent,
    FormEventComponent,
    FormResourceComponent,
    FormStudentComponent,
    FormTutorComponent,
    FormLoginComponent,
    FormNotificationComponent,
    FormUserComponent,
    ViewAdminComponent,
    ViewCourseComponent,
    ViewEventComponent,
    ViewLecturerComponent,
    ViewNotificationComponent,
    ViewResourceComponent,
    ViewStudentComponent,
    ViewTutorComponent,
    FormDepdetailsComponent,
    ViewModelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, PushpullService],
  bootstrap: [AppComponent]
})
export class AppModule { }
