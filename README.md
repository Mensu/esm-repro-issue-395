# How to reproduce

```
npm i
node -r esm a.mjs
```

## Expected Output

which could be produced with ``node --experimental-modules a.mjs``

```
(node:27807) ExperimentalWarning: The ESM module loader is experimental.
[Function: A]
true
```

## Actual Output

with `node -r esm a.mjs`

```
[Function: A]
<cwd>/b.mjs:5
  return B;

ReferenceError: A is not defined
    at Function.A (<cwd>/b.mjs:5:18)
    at <cwd>/a.mjs:10:27
    at Object.<anonymous> (<cwd>/a.mjs:1)
```

I believe the `ReferenceError: A is not defined` shouldn't have been thrown because `A` has got defined at the point of `console.log(B.A() === A)`.

I also found that `  return B;` is not at `<cwd>/b.mjs:5`, but at `<cwd>/a.mjs:5`
