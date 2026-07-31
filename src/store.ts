// Canonical @stencil/store usage, straight from its README:
// a shared module exporting a store created at module scope.
import { createStore } from '@stencil/store';

export const { state } = createStore({ clicks: 0, label: 'initial' });
