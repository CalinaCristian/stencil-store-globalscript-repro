import { Component, h, Prop } from '@stencil/core';

import { state } from '../store';

@Component({ tag: 'my-counter', shadow: true })
export class MyCounter {
  @Prop() tick = 0;
  render() {
    return (
      <div>
        <span id="label">{state.label}</span>
        <span id="clicks">{state.clicks}</span>
        <span id="tick">{this.tick}</span>
      </div>
    );
  }
}
