/**
 * Create a custom element called:
 *  <movie-box></movie-box>
 *
 * Requirements:
 *
 * The element must:
 *
 *  use Shadow DOM
 *  accept attributes:
 *      title (h2)
 *      year (p)
 *      director (p)
 *      poster (img)
 *
 * render a styled card inside the shadow root
 *
 * use helper methods
 *
 * example HTML:
 * <movie-box title="MOVIE_TITEL" year="0000" director="DIRECTOR_NAME"
 *  poster-url="POSTER_URL"></movie-box>
 *
 */
class MovieBox extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  //getters
  getTitle() {
    return this.getAttribute("title");
  }

  getYear() {
    return this.getAttribute("year");
  }

  getDirector() {
    return this.getAttribute("director");
  }

  getPosterUrl() {
    return this.getAttribute("poster-url");
  }
  //alternative getter:
  getMovieData() {
    return {
      title: this.getAttribute("title") || "Unknown Movie",
      year: this.getAttribute("year") || "N\A",
      director: this.getAttribute("director") || "Unknown Director",
      poster: this.getAttribute("poster-url") || "",
    };
  }

  //background: gainsboro;

  getStyles() {
    return `
        <style>
            .card {
                background: #dcddd8ff;
                padding: 1rem;
            }
            h2{
                text-align:center;
            }
            img {
                width: 100%;}

        </style>
        `;
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });

    // you can use this too!
    const movieData = this.getMovieData();
    console.log(movieData);

    shadow.innerHTML = `
        ${this.getStyles()}
        <div class="card">
            <h2>${this.getTitle()}</h2>
            <p><strong>Director:</strong> ${this.getDirector()}</p>
            <p><strong>Year:</strong> ${this.getYear()}</p>
            <div class="img">
            <img src="${movieData.poster}">
            </div>
        </div>
    `;
  }
}
customElements.define("movie-box", MovieBox);

// getMovieData() {
//         return {
//             title: this.getAttribute("title") || "Unknown Movie",
//             year: this.getAttribute("year") || "N\A",
//             director: this.getAttribute("director") || "Uknow Director",
//             poster: this.getAttribute("poster-url") || ""
//         };
//     }
