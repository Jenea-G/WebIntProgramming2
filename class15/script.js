// Custom Elements

// is an approach to create our own HTML tags and teach the browser what they mean

// custom elements offer a new path where
//      we define a reusable HTML tag once
//      use it whenerver needed\

// built-in tags are like:
//      <div> - <p> - <button>

// defining our own tags would be:
// <user-card> - <movie-ticket> - <arcade-game>

// Important rule:

// custom element names MUST include a hyphe.

// <user-card> is valid
// <usercard> is invalid

// to create custom elements we need to follow this recipie
//  1   create a class that extends HTMLElement
//  2   register it with customElements.define()
//  3   use the new tag in HTML

class HelloBox extends HTMLElement {
  // this is a lifecycle method, it runs when the element is inserted into the document.
  connectedCallback() {
    this.innerHTML = `
        <div>
            <h2>Hello from a custom element</h2>
            <p>This content was created by the browser using our class.</p>
        `;
  }
}

customElements.define("hello-box", HelloBox);
// customEmemnts is from js library with built in function define. first is the tag-name, second is the class name.
// now the browser knows wht to do when it sees that tag.

// why connectedCallback matters?

// render content
// read attributes
// initialize UI behaviour.

// you don't need to overload with ever lifecycle method.

/**
 * Let's make it DYNAMIC!
 */

class UserCard extends HTMLElement {
  connectedCallback() {
    // getAttribute reads the value from the HTML tag.
    const name = this.getAttribute("name"); // the data inside the component
    const role = this.getAttribute("role"); // the data inside the component
    // HTML provides the imput, and the custom element renders based on that input.
    this.innerHTML = `
        <div>
            <h2>Name: ${name}</h2>
            <p>Role: ${role}</p>
        </div>
        `;
  }
}

customElements.define("user-card", UserCard);

// a custom element becomes much more useful when it is not hard-coded.

// 1. tell JS that we're creating a custom element
class GameCard extends HTMLElement {
  // 2. the first thing that executes
  connectedCallback() {
    // 3. Get the attributes. We want the HTML input for Title, Genre, Players
    const title = this.getAttribute("title");
    const genre = this.getAttribute("genre");
    const players = this.getAttribute("players");

    // 4.  Display the DOM
    this.innerHTML = `
        <div>
            <h2>Title: ${title}</h2>
            <p>Genre: ${genre}</p>
            <p>Players: ${players}</p>
        </div>
    `;
  }
}
// register created class with custom elements (define it with tag-name)
customElements.define("game-card", GameCard);

// We're getting reusable UI!
//      clean HTML usage
//      we're thinking about components, and a better architecture of our code
//      repeated card structures are now becoming custom elements.

/**
 * Improving rendering with helper methods
 */

// custom elements can still have internal methods!
// rendering logic can be much more organized in this way
class CourseName extends HTMLElement {
  connectedCallback() {
    this.render(); // calls the internal render function
  }
  // internal function
  render() {
    const title = this.getAttribute("title");
    const credits = this.getAttribute("credits");
    const instructor = this.getAttribute("instructor");

    this.innerHTML = `
    <article>
            <h2>Title: ${title}</h2>
            <p><strong>Credits: </strong>${credits}</p>
            <p><strong>Instructor: </strong>${instructor}</p>
    </article>
    `;
  }
}

customElements.define("course-name", CourseName);
