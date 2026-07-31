# Repro: @stencil/store stops re-rendering components when the store is created from globalScript code

Since Stencil 4.33.0 the client runtime imports globalStyles from the generated app-globals module, which also wraps the user's globalScript. If the globalScript imports a module that calls createStore() at module scope, a module cycle makes Rollup emit the runtime last in the chunk, and @stencil/store's typeof getRenderingRef check fails at store-creation time, so the renderer subscription is silently dropped. Store values still update; components just never re-render.

## Steps

1. `npm install && npm run build`
2. serve the `www/` folder (e.g. `npx serve www`) and open it
3. the label shows "ready", proving the globalScript ran
4. in the console run `document.dispatchEvent(new Event('bump'))` — the counter stays at 0
5. run `document.querySelector('my-counter').tick = 1` — the counter jumps to the real value, proving the store updated but no re-render happened
6. `npm i -D @stencil/core@4.32.0 && npm run build`, repeat steps 2-4: the counter now updates immediately

## Versions

Broken on 4.33.0 through 4.43.5 (latest at time of writing). Works on 4.32.0 and older. The import is gone again in the 5.0.0 alphas.
