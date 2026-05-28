// JavaScript uses:

//      try
//      catch
//      finally

// Basic pattern:
try {
  // code that may fail
} catch (error) {
  // code that runs if an error happens
} finally {
  // code that always runs
}

// Example A - basic try / catch
console.log("=== Example A ===");
try {
  const result = JSON.parse('{"name":"Alice"}');
  console.log(result.name);
} catch (error) {
  console.log("Something went wrong");
  console.log(error.message);
}

// Example B - parsing invalid json
console.log("=== Example B ===");
try {
  const result = JSON.parse("{ name: Alice }");
  console.log(result);
} catch (error) {
  console.log("JSON parsing failed");
  console.log(error.message);
}

// Example C - finally
console.log("=== Example C ===");
try {
  console.log("Trying something...");
  throw new Error("Example failure");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("This always runs");
}

// Throwing your own errors
// Example A - Input validation
console.log("=== a) input validation ===");
function setAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }

  return `Age set to ${age}`;
}

try {
  console.log(setAge(-5));
} catch (error) {
  console.log(error.message);
}

// Ex B - empty name validation
console.log("=== b) empty name validation ===");
function greetUser(name) {
  if (name.trim() === "") {
    throw new Error("Name cannot be empty"); //throw stops normal execution in that part of the code and sends control to the nearest matching error handler.
  }
  return `Hello, ${name}`;
}

try {
  console.log(greetUser("  "));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(greetUser("Tiki"));
} catch (error) {
  console.log(error.message);
}
