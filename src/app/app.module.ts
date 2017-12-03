import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

/* Import Form Functionality */
import { FormsModule } from '@angular/forms';

/* Firebase Imports */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

/* Define Database Imports */
export const firebaseConfig = {
  apiKey: 'AIzaSyA90GPBnK_AhvJ2yG9OLjmH3e3CeySSxL0',
  authDomain: 'chem-admin-app.firebaseapp.com',
  databaseURL: 'https://chem-admin-app.firebaseio.com',
  projectId: 'chem-admin-app',
  storageBucket: 'chem-admin-app.appspot.com',
  messagingSenderId: '695472243722'
};

/* Import Custom Authorization Service */
import { AuthService } from './auth.service';

/* Component Imports */
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseComponent } from './course/course.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { ResourceComponent } from './resource/resource.component';
import { EventComponent } from './event/event.component';
import { TutorComponent } from './tutor/tutor.component';
import { AdminComponent } from './admin/admin.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { TutorFormComponent } from './tutor-form/tutor-form.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotificationComponent } from './notification/notification.component';
import { EventFormComponent } from './event-form/event-form.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';


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

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CourseFormComponent,
    CourseComponent,
    LecturerComponent,
    ResourceComponent,
    EventComponent,
    TutorComponent,
    AdminComponent,
    LoginFormComponent,
    CreateFormComponent,
    ResourceFormComponent,
    TutorFormComponent,
    UserComponent,
    UserFormComponent,
    NotificationComponent,
    EventFormComponent,
    NotificationFormComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
