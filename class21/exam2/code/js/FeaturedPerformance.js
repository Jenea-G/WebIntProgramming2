import { Performance } from "./Performance.js"; //correct importing

export class FeaturedPerformance extends Performance {
  //extends Performance
  constructor(
    id,
    title,
    artist,
    stage,
    time,
    ticketPrice,
    ticketsRemaining,
    featured,
  ) {
    super(title, id, stage, artist, ticketPrice, ticketsRemaining, time); //Uncaught SyntaxError: 'super' keyword unexpected here == add extend class

    this.featured = Boolean(featured);
  }

  get lineupLabel() {
    return "Featured Performance";
  }
}
