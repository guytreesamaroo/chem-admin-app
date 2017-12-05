export class Resource {
  $key: string;
  name: string;
  description: string;
  file: File;

  constructor(
    name: string,
    description: string,
    file: File,
  ) {
    this.name = name;
    this.description = description;
    this.file = file;
  }
}
