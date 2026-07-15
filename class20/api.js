export async function getEvents() {
  const response = await fetch("./events.json");

  if (!response.ok) {
    throw new Error(`Unable to load events. HTTP status: ${response.status}`);
  }

  return response.json();

  // option 2 for return
  // const data = await response.json();
  // return data
}
