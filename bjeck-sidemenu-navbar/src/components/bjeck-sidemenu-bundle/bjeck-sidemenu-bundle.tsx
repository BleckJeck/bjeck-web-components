import { Component, Listen, State, Prop } from '@stencil/core';

@Component({
  tag: 'bjeck-sidemenu-bundle'
})

export class BjeckSidemenuBundle {

@Prop() brand: string;

@State() sideMenuWidth = {"width": "0"}

@Listen('openBtn')
openSideMenuHandler() {
  this.sideMenuWidth = {"width": "250px"}
}

@Listen('closeBtn')
closeSideMenuHandler() {
  this.sideMenuWidth = {"width": "0"}
}

  render() {
    return ([
      <bjeck-main-navbar brand={this.brand}>
        <slot name="main" />
      </bjeck-main-navbar>,

      <bjeck-side-navbar style={this.sideMenuWidth}>
        <slot name="side" />
      </bjeck-side-navbar>
    ]);
  }
}
