import { state } from '../store';

export default () => {
  state.label = 'ready';
  document.addEventListener('bump', () => {
    state.clicks = state.clicks + 1;
  });
};
