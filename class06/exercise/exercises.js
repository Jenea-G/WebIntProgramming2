console.log("===== Ex1 ===== ");

const jsonText =
  '{"title":"Web Interface Programming 2","credits":3,"active":true}';
const parsedText = JSON.parse(jsonText);
console.log(parsedText);
console.log("Here is the title: " + parsedText.title);
console.log("Here are the credits: " + parsedText.credits);

console.log("===== Ex2 ===== ");
const course = {
  title: "Advanced Programming",
  credits: 3,
  active: true,
};
const courseJson = JSON.stringify(course);
console.log("JSON text: " + courseJson);
console.log("Type of JSON text: " + typeof courseJson);

console.log("===== Ex3 ===== ");

// const courseJsonPretty = JSON.stringify(course, ["title"], 2); // will send only the title in the parsed text
const courseJsonPretty = JSON.stringify(course, null, 2);
console.log("JSON text with indentation: " + courseJsonPretty);
