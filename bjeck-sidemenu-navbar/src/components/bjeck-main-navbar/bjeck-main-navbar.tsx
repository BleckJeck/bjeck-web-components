import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'bjeck-main-navbar',
  styleUrl: 'bjeck-main-navbar.scss'
})

export class BjeckMainNavbar {

  @Event() openBtn: EventEmitter

  openBtnHandler() {
    this.openBtn.emit();
  }

  render() {
    return (
      <nav>
        <span>
          <a id="open-side-menu" href="#" onClick={this.openBtnHandler.bind(this)}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
              <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
              <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
            </svg>
          </a>
        </span>
        <slot name="main" />
      </nav>
    );
  }
}
