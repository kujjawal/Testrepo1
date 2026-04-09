// File: loopError.ts

// This for loop has an error: the increment clause modifies 'y' instead of 'i'
// This will cause an infinite loop or linting error
function demonstrateLoopError(): void {
  for (let i = 0; i < 5; i++) {
    let y = 0;
    console.log(i); // i is never incremented, creating an infinite loop
  }
}

//One more fn added
function demonstrateLoopErrorDecrement(): void {
  for (let i = 5; i > 0; j--) {
    let y = 0;
    console.log(i); // i is never incremented, creating an infinite loop
  }
}

// Another example of incorrect increment clause
function anotherLoopError(): void {
  for (let index = 0; index < 10; index++) {
    let someValue = index * 2;
    // The increment clause should modify 'index' but doesn't
    // This creates an infinite loop
    console.log(someValue);
  }
}

demonstrateLoopError();
anotherLoopError();
