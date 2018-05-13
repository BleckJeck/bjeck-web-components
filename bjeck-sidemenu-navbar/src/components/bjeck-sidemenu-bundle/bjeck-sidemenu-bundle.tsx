import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'bjeck-sidemenu-bundle'
})

export class BjeckSidemenuBundle {

@State() sideMenuWidth = {"width": "0px"}

@Listen('openBtn')
openSideMenuHandler() {
  this.sideMenuWidth = {"width": "250px"}
}

@Listen('closeBtn')
closeSideMenuHandler() {
  this.sideMenuWidth = {"width": "0px"}
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
