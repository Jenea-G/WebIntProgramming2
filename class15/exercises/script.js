// 1. create a custom element called:
//              <movie-card></movie-card>

// this element should accept these attributes:

//   1. title 2. year 3. rating

// render it on your html file.

// 2. refactor a basic custom element

class MovieCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const year = this.getAttribute("year");
    const rating = this.getAttribute("rating");

    this.innerHTML = `
    <div>
        <h2>Movie Title: ${title}</h2>
        <p><strong>Year: </strong>${year}</p>
        <p><strong>Rating: </strong>${rating}</p>
    </div>
    `;
  }
}

customElements.define("movie-card", MovieCard);

// refactor it so that connectedCallback only calls render()
// All HTML generation happens inside render()

// 3. create another GameCard custom element with the following:

//      1. connectedCallback()
//      2. getTitle()
//      3. getYear()
//      4. getRating()
//      4.b formats Rating  -- ratingFormatter() X/5
//      5. renderHeading()
//      6. renderBody()
//      5. render()

class GameCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getTitle();
    const year = this.getYear();
    const rating = this.getRating();

    this.innerHTML = `
    <div>
        ${this.renderHeading(title)}
        ${this.renderBody(year, rating)}
    </div>
    `;
  }

  getTitle() {
    return this.getAttribute("title");
  }
  getYear() {
    return this.getAttribute("year");
  }
  getRating() {
    return this.ratingFormatter(this.getAttribute("rating"));
  }

  ratingFormatter(value) {
    return `${value} / 5`;
  }

  renderHeading(title) {
    return `
        <h2>Game Title: ${title}</h2>
    `;
  }

  renderBody(year, rating) {
    return `
        <p><strong>Year: </strong>${year}</p>
        <p><strong>Rating: </strong>${rating}</p>
    `;
  }
}

customElements.define("game-card", GameCard);
