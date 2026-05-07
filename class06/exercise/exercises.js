console.log("===== Ex1 ===== ");

const jsonText =
  '{"title":"Web Interface Programming 2","credits":3,"active":true}';
const parsedText = JSON.parse(jsonText);
console.log(parsedText);
console.log("Here is the title: " + parsedText.title);
console.log("Here are the credits: " + parsedText.credits);

console.log("===== Ex2 ===== ");
