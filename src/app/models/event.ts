export class Event {
  $key: string;
  title: string;
  notes: string;
  objectid: string;
  allDay: boolean;
  startTime: Date;
  endTime: Date;
  location: string;

  constructor(title, notes, objectid, allDay, startTime, endTime, location) {
      this.title = title;
      this.notes = notes || '';
      this.objectid = objectid;
      this.allDay = allDay;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location || '';
  }
}
