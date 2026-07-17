export class Performance {
  constructor(id, title, artistId, stage, time, ticketPrice, ticketsRemaining) {
    this.id = id;
    this.title = title;
    this.artistId = artistId;
    this.stage = stage;
    this.time = time;
    this.ticketPrice = Number(ticketPrice); // data type is Number not string
    this.ticketsRemaining = Number(ticketsRemaining); // correct data type
    this.featured = false;
  }

  get formattedPrice() {
    return `$${this.ticketPrice.toFixed(2)}`; //correct method .toFixed()
  }

  get hasTickets() {
    return this.ticketsRemaining > 0; // inverted logic, for app.js function should return "true"
  }

  get ticketLabel() {
    if (!this.hasTickets) {
      return "Sold out";
    }

    return `${this.ticketsRemaining} ` + `tickets remaining`;
  }

  get lineupLabel() {
    return "Regular lineup"; // not a featured performance
  }

  static totalAvailableTickets(performances) {
    return performances.reduce(
      (total, performance) => total + performance.ticketsRemaining,
      0, //accumulator is a number and we start from 0
      // Lineup couldn't be loaded: TypeError: performances.reduce is not a function at Performance.totalAvailableTickets (Performance.js:34:25)
    );
  }

  static averagePrice(performances) {
    if (performances.length === 0) {
      return "$0.00";
    }

    const total = performances.reduce(
      (sum, performance) => sum + performance.ticketPrice,
      0,
    );

    return (total / performances.length).toFixed(2); //.length to get the number of performances
  }
}
