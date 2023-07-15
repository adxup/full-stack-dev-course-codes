function outerFunction(outerParam) {
  var innerVariable = "I'm inside the closure";

  function innerFunction(innerParam) {
    console.log("Outer parameter:", outerParam);
    console.log("Inner parameter:", innerParam);
    console.log(innerVariable);
  }

  return innerFunction;
}

var closure = outerFunction("Hello");

closure("World");
