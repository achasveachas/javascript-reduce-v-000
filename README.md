JavaScript Reduce
---

## Objectives

1. Explain the concept of reduce() in programming
2. Practice writing a function that accepts a function as one of its arguments
3. Practice building small pieces of code that can be used later

## Introduction

- Introduce students to reduce() with an example -- maybe something about taking a collection, repeating an action on it, and returning the accumulation of that action

## Implementation

- It might be a good idea to refresh students' memories on writing their own forEach()
- There's no need to implement the full polyfill, and this `reduce()` should not be attached to the `Array` prototype.
- Instead, students could end up with something as basic as:

``` javascript
function reduce(collection, fn, init) {
  let value = init

  for (const item in collection) {
    value = fn(temp, collection[item], item, collection)
  }

  return value
}
```

- The point is that this is super simple even if it is somewhat conceptually difficult because it's so abstract
- But abstractions are, of course, very powerful

## Resources

- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
