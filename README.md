# Repro: @stencil/store stops re-rendering components when the store is created from globalScript code

Since Stencil 4.33.0 the client runtime imports globalStyles from the generated app-globals module, which also wraps the user's globalScript. If the globalScript imports a module that calls createStore() at module scope, a module cycle makes Rollup emit the runtime last in the chunk, and @stencil/store's typeof getRenderingRef check fails at store-creation time, so the renderer subscription is silently dropped. Store values still update; components just never re-render.

## Steps

1. `npm install && npm run build`
2. serve the `www/` folder (e.g. `npx serve www`) and open it
3. the label shows "ready", proving the globalScript ran
4. click **"Increment store counter"** a few times — the counter stays at 0
5. click **"Force unrelated re-render"** — the counter jumps to the number of times you actually clicked, proving the store updated but no re-render happened on the store writes
6. `npm i -D @stencil/core@4.32.0 && npm run build`, hard-reload: the counter now updates on every click

## Versions

Broken on 4.33.0 through 4.43.5 (latest at the time of writing). Works on 4.32.0 and older — the [`works-on-4.32`](../../tree/works-on-4.32) branch of this repo is identical except `@stencil/core` is pinned to 4.32.0, so you can compare directly:

```
git checkout works-on-4.32 && npm install && npm run build
```

The import that causes this is gone again in the 5.0.0 alphas.
