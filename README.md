# Cloudflare Workers + Lit SSR repro

Lit SSR doesn't work in worker-like environments. e.g. Cloudflare Workers and Vercel Edge.

## How to reproduce

```
npm install
npm run dev
```

You'll get `Uncaught ReferenceError: window is not defined`.

```
npm run build
```

Build the bundle and inspect there's `window` in the output code. ([`dist/index.js`](./dist/index.js) - I git committed this to show it easily)

## How to fix/patch

!! NPM only !!

```
npm run patch
```

This will patch `lit-html` and `@lit/reactive-element` `package.json` to create a `exports` `worker` condition that's the same as the `node` condition.

```
npm run unpatch
```

Undo the above if needed.
