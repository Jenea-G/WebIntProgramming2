export class Team {
  constructor(id, name, group, points, played, goalDifference) {
    this.id = id;
    this.name = name;
    this.group = group;
    this.points = points;
    this.played = played;
    this.goalDifference = goalDifference;
  }

  get summary() {
    return `${this.name} - Group ${this.group} - ${this.points} pts.`;
  }

  set points(value) {
    if (value >= 0) {
      this.__points = value;
    } else throw new Error("Number of points cannot be negative");
  }

  get points() {
    return this.__points;
  }

  static fromObject(data) {
    return new Team(
      data.id,
      data.name,
      data.group,
      data.points,
      data.played,
      data.goalDifference,
    );
  }
}

// // Test object creation
// fetch("teams.json")
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((data) => {
//     const team1 = Team.fromObject(data[1]);
//     console.log(team1);
//     console.log(team1.summary);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
