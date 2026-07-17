export async function getFestivalData() {
  const artistPromise = fetch("./artists.json"); //correct file name, correct constant name - we are fetching promises
  const performancePromise = fetch("./performances.json");

  const responses = await Promise.all([artistPromise, performancePromise]); //add [] to passe an array, add await
  // Promise { <state>: "fulfilled", <value>: Array[2] }

  console.log(responses);

  const artistResponse = responses[0]; //getting first element of responses
  const performanceResponse = responses[1]; //getting second element of responses

  if (!artistResponse.ok || !performanceResponse.ok) {
    throw new Error("Festival data could not be loaded.");
  }

  const artists = await artistResponse.json(); //method lacking ()

  const performances = await performanceResponse.json(); // added await fixed the error -- // ReferenceError: Cannot access 'artists' before initialization at HTMLButtonElement.loadLineup (app.js:38:26) -- as it got the promise

  console.log(artists, performances);

  return {
    artists: artists, // data.artists in app.js
    performances: performances, // data.performances in app.js
  };
}
