export class Notification {
  $key: string;
  title: string;
  dateCreated: string;
  description: string;

  constructor(title: string, dateCreated: string, description: string) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.description = description;
  }
}
