export class Artist {
  constructor(id, name, genre, stage, time, country, headliner) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.stage = stage;
    this.time = time;
    this.country = country;
    this.headliner = headliner;
  }

  get summary() {
    return `${this.name} - ${this.genre} - ${this.stage}`;
  }

  set headliner(value) {
    if (typeof value === "boolean") {
      this.__headliner = value;
    } else
      throw new Error(
        "Headliner attribute allows only boolean values true/false",
      );
  }

  get headliner() {
    return this.__headliner;
  }

  set id(value) {
    if (
      Number.isInteger(Number(value)) &&
      Number(value) > 0 &&
      typeof value !== "boolean"
    )
      this.__id = value;
    else throw new Error("The Artist id should be a number greater than 0.");
  }

  get id() {
    return this.__id;
  }

  set name(value) {
    if (Artist.isNotEmpty(value)) this.__name = value;
    else throw new Error("Artist's name shouldn't be empty.");
  }

  get name() {
    return this.__name;
  }

  set stage(value) {
    if (Artist.isNotEmpty(value)) this.__stage = value;
    else throw new Error("Artist's stage shouldn't be empty.");
  }

  get stage() {
    return this.__stage;
  }

  set country(value) {
    if (Artist.isNotEmpty(value)) this.__country = value;
    else throw new Error("Artist's country shouldn't be empty.");
  }

  get country() {
    return this.__country;
  }

  set time(value) {
    if (Artist.isNotEmpty(value)) this.__time = value;
    else throw new Error("Artist's time shouldn't be empty.");
  }

  get time() {
    return this.__time;
  }

  static fromObject(data) {
    return new Artist(
      data.id,
      data.name,
      data.genre,
      data.stage,
      data.time,
      data.country,
      data.headliner,
    );
  }

  static isNotEmpty(value) {
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  }
}

//console.log(`check not empty string ${Artist.isNotEmpty("  ")}`);
