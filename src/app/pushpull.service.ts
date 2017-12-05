import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import {Admin} from './models/admin';
import {Course} from './models/course';
import {Event} from './models/event';
import {Lecturer} from './models/lecturer';
import {Notification} from './models/notification';
import {Resource} from './models/resource';
import {Student} from './models/student';
import {Tutor} from './models/tutor';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PushpullService {
  adminList: AngularFireList<any>;
  courseList: AngularFireList<any>;
  eventList: AngularFireList<any>;
  lecturerList: AngularFireList<any>;
  notificationList: AngularFireList<any>;
  resourceList: AngularFireList<any>;
  studentList: AngularFireList<any>;
  tutorList: AngularFireList<any>;
  depdetail: any;

  constructor(public firebase: AngularFireDatabase) {
    this.adminList = this.getModelData('administrators');
    this.courseList = this.getModelData('courses');
    this.eventList = this.getModelData('events');
    this.lecturerList = this.getModelData('lecturers');
    this.notificationList = this.getModelData('notifications');
    this.resourceList = this.getModelData('resources');
    this.studentList = this.getModelData('students');
    this.tutorList = this.getModelData('tutors');
    this.depdetail = this.getModelData('depdetail');
  }

  getModelData(modelName: string) {
    return this.firebase.list(modelName);
  }

  /* INSERT FUNCTIONS */
  insertAdministrator(admin: Admin) {
    this.notificationList.push({
      username: admin.username,
      firstname: admin.firstname,
      lastname: admin.lastname,
      password: admin.password,
      email: admin.email,
      department: admin.department
    });
  }

  insertCourse(course: Course) {
    this.courseList.push({
      code: course.code,
      credits: course.credits,
      degree: course.degree,
      department: course.department,
      lecturer: course.lecturer,
      name: course.name,
      prerequisite: course.prerequisite,
      summary: course.summary,
      tutor: course.tutor,
      year: course.year
    });
  }

  insertDepdetails(details: string) {
    this.depdetail.update({
      detail: details
    });
  }

  insertEvent(event: Event) {
    this.eventList.push({
      title: event.title,
      notes: event.notes,
      objectid: event.objectid,
      allDay: event.allDay,
      startTime: event.startTime,
      endTime: event.endTime,
      location: event.location
    });
  }

  insertLecturer(lecturer: Lecturer) {
    this.lecturerList.push({
      username: lecturer.username,
      firstname: lecturer.firstname,
      lastname: lecturer.lastname,
      password: lecturer.password,
      email: lecturer.email,
      department: lecturer.department
    });
  }

  insertNotification(notif: Notification) {
    this.notificationList.push({
      title: notif.title,
      dateCreated: notif.dateCreated,
      description: notif.description
    });
  }

  insertResource(resource: Resource) {
    this.resourceList.push({
      name: resource.name,
      description: resource.description,
      file: resource.file
    });
  }

  insertStudent(student: Student) {
    this.studentList.push({
      id: student.id,
      firstname: student.firstname,
      lastname: student.lastname,
      password: student.password,
      email: student.email,
      department: student.department,
      degree: student.degree,
      status: student.status
    });
  }

  insertTutor(tutor: Tutor) {
    this.tutorList.push({
      about: tutor.about,
      name: tutor.name,
      qualifications: tutor.qualifications,
      title: tutor.title
    });
  }

  /* GETTER FUNCTIONS */

  getModel(modelName: string) {
    return this
    .getModelData(modelName)
    .snapshotChanges()
    .map(
      changes => {
        return changes.map( c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
  }
}
