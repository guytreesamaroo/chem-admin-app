import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';

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
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';

import { CourseFormComponent } from './course-form/course-form.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CourseFormComponent,
    CourseComponent
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
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
