import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bjeck-side-navbar',
  styleUrl: 'bjeck-side-navbar.scss'
})

export class BjeckSideNavbar {

  @Event() closeBtn: EventEmitter

  closeBtnHandler() {
    this.closeBtn.emit();
  }

  render() {
    return (
      <div id="wrapper">
        <span id="close-side-menu" onClick={this.closeBtnHandler.bind(this)}>&times;</span>
        <slot name="side" />
      </div>
    );
  }
}
