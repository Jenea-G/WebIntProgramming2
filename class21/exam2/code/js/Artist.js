export class Artist {
  //SyntaxError: The requested module './Artist.js' does not provide an export named 'Artist' (at app.js:3:10) == removed 'default' from export to match importing

  constructor(id, name, country, genre) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.genre = genre;
  }

  get displayLabel() {
    return `${this.name} — ` + `${this.country}`;
  }
}
