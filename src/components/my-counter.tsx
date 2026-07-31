import { Component, h, Prop } from '@stencil/core';

import { state } from '../store';

@Component({ tag: 'my-counter', shadow: true })
export class MyCounter {
  @Prop() tick = 0;

  render() {
    return (
      <div>
        label: <span id="label">{state.label}</span> &nbsp;|&nbsp; clicks: <span id="clicks">{state.clicks}</span>
      </div>
    );
  }
}
