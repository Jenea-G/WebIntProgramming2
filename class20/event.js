export class Event {
  constructor(id, title, artist, genre, venue, date, price) {
    this.id = id;
    this.artist = artist;
    this.genre = genre;
    this.venue = venue;
    this.genre = genre;
    this.date = date;
    this.price = price;
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  get displayName() {
    return `${this.artist}`;
  }
}
