// moduleA.js
// Exporting a named function
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Exporting a constant variable
export const message = "Welcome to the module!";

// moduleB.js
// Importing named exports from moduleA.js
import { greet, message } from "./moduleA.js";

// Using the imported functions and variables
greet("Alice");
console.log(message);

// index.html
document.write(`
<!DOCTYPE html>
<html>
  <body>
    <script type="module" src="moduleB.js"></script>
  </body>
</html>
`);
