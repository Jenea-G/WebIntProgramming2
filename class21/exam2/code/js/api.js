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

  const artists = artistResponse.json(); //method lacking ()

  const performances = performanceResponse.json();

  console.log(artists, performances);

  return {
    artists: artists, // data.artists in app.js
    performances: performances, // data.performances in app.js
  };
}
