# Unexpected Null/Undefined Handling in foo Function

This repository demonstrates a common JavaScript bug involving unexpected handling of `null` or `undefined` function arguments. The `foo` function silently returns without any error handling when it receives `null` or `undefined` values.  This can lead to unexpected behavior and difficult-to-debug issues.  The solution demonstrates how to properly handle these cases by adding explicit checks and potentially throwing errors or using default values.

## Bug

The original `foo` function is provided in `bug.js`. Note that it simply returns early if `a` or `b` are `null` or `undefined`, leaving no clear indication of the error.

## Solution

The improved `foo` function is provided in `bugSolution.js`. This version explicitly checks for `null` and `undefined` values and handles them in a more robust way, either by providing defaults or throwing exceptions for better debugging.