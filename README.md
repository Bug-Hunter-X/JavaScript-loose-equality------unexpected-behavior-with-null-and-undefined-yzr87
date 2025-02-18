# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug involving the loose equality operator (`==`) and its unexpected behavior when comparing `null` and `undefined`.

## The Bug
The `foo` function is designed to return 0 if the input `a` is `null`, and `a + 1` otherwise. However, due to the use of loose equality, it unexpectedly returns `NaN` when the input is `undefined` because `undefined == null` evaluates to `true` but `undefined + 1` results in `NaN`.

## Solution
The solution involves using strict equality (`===`) to explicitly check for `null` and `undefined` separately, ensuring that the function behaves as intended for both cases.