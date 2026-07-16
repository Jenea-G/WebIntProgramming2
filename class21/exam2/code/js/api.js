export async function getFestivalData() {
  const artistResponse = await fetch("./artists.json"); //add await, correct file name

  const performanceResponse = await fetch("./performances.json"); //add await

  //const responses = Promise.all(artistResponse, performanceResponse);

  if (!artistResponse.ok || !performanceResponse.ok) {
    // logic inversion fix
    throw new Error("Festival data could not be loaded.");
  }

  const artists = artistResponse.json(); //method lacking ()

  const performances = performanceResponse.json();

  return {
    artist: artists,
    performance: performances,
  };
}
