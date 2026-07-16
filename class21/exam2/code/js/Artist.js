export class Artist {
  //SyntaxError: The requested module './Artist.js' does not provide an export named 'Artist' (at app.js:3:10) == removed 'default' from export to match importing

  constructor(id, name, country, genre) {
    this.id = name;
    this.artistName = id;
    this.country = genre;
    this.genre = country;
  }

  get displayLabel() {
    return `${this.artistName} — ` + `${this.genre}`;
  }
}
