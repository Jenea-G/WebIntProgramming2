// Fetch

// A javascript nativ tool

// is how javascript asks the server for information

function getStudentData() {
  return new Promise((resolve) => {
    // resolve(55)
    // resolve("hello");
    resolve({ name: "Alice", program: "web dev" });
  });
}

getStudentData().then((result) => {
  console.log(result);
});

// now we're moving to fetch to make actual server requests.

// The general flow is that
// 1. our browser sends a request to a server.
// 2. The server sends back a response.
// 3. That response

fetch("https://jsonplaceholder.typicode.com/users/1");

// const result = fetch("https://jsonplaceholder.typicode.com/users/1");
// console.log(result);

const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users/2");
console.log(fetchRequest);

fetchRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Fetch gives us the response first.
// then, we will need to extract and parse the data from that response.

// Promise object --> Response Object

fetchRequest
  .then((result) => {
    console.log("Status: ", result.status); // HTTP status code
    console.log("Ok: ", result.ok); // when the response is successful we get oj
    console.log(result); // the response object
  })
  .catch((error) => {
    console.log(error);
  });

// in general:
//              200 range: success
//              400 range: not found, not authorized, etc.
//              500 range: server error/issues

// now let;s parse it!

fetchRequest
  .then((response) => {
    // we first parse our response to a JSON format.
    return response.json();
  })
  .then((result) => {
    console.log("==================");
    console.log("Parsed JSON: ");
    console.log(result.name);
    console.log(result.company.name);
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const badFetchRequest = fetch("https://jsonplaceholder.typicode.com/users/100");

badFetchRequest
  .then((result) => {
    console.log("Status: ", result.status); // HTTP status code
    console.log("Ok: ", result.ok); // when the response is successful we get oj
    console.log(result); // the response object
  })
  .catch((error) => {
    console.log(error);
  });
