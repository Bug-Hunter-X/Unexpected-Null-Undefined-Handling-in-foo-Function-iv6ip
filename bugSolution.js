function foo(a, b) {
  a = a === null || a === undefined ? 0 : a; //provide default values
  b = b === null || b === undefined ? 0 : b;//provide default values
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers.');
  }
  // ... more code
}