import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'bjeck-sidemenu-bundle'
})

export class BjeckSidemenuBundle {

@State() sideMenuWidth = {"display": "none"}

@Listen('openBtn')
openSideMenuHandler() {
  this.sideMenuWidth = {"display": "block"}
}

@Listen('closeBtn')
closeSideMenuHandler() {
  this.sideMenuWidth = {"display": "none"}
}

  render() {
    return ([
      <bjeck-main-navbar>
        <slot name="main" />
      </bjeck-main-navbar>,

      <bjeck-side-navbar style={this.sideMenuWidth}>
        <slot name="side" />
      </bjeck-side-navbar>
    ]);
  }
}
