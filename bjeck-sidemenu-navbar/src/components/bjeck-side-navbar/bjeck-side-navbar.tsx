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
      <div>
        <a href="#" onClick={this.closeBtnHandler.bind(this)}>&times;</a>
        <slot name="side" />
      </div>
    );
  }
}
