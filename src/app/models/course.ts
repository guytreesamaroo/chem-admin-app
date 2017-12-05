export class Course {
  $key: string;
  code: string;
  credits: number;
  degree: string;
  department: string;
  lecturer: string;
  name: string;
  prerequisite: string;
  summary: string;
  tutor: number;
  year: number;

  constructor(
    code: string,
    credits: number,
    degree: string,
    department: string,
    lecturer: string,
    name: string,
    prerequisite: string,
    summary: string,
    tutor: number,
    year: number) {
      code = code;
      credits = credits;
      degree = degree;
      department = department;
      lecturer = lecturer;
      name = name;
      prerequisite = prerequisite;
      summary = summary;
      tutor = tutor;
      year = year;
  }
}
