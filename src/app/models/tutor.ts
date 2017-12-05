import {Course} from '../models/course';

export class Tutor {
  $key: string;
  about: string;
  name: string;
  qualifications: string;
  title: string;

  constructor(
    about: string,
    name: string,
    qualifications: string,
    title: string) {
      this.about = about;
      this.name = name;
      this.qualifications = qualifications;
      this.title = title;
  }
}
