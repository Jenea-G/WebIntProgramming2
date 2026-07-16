import { Performance } from "./Performance.js"; //correct importing

export class FeaturedPerformance extends Performance {
  //extends Performance
  constructor(id, title, artistId, stage, time, ticketPrice, ticketsRemaining) {
    super(id, title, artistId, stage, time, ticketPrice, ticketsRemaining); //Uncaught SyntaxError: 'super' keyword unexpected here == add extend class, correct properties order and names

    this.featured = true; // corrected logic, since it is featured as opposite to the Performance class 'this.featured = false'.
  }

  get lineupLabel() {
    return "Featured Performance";
  }
}
