import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'bjeck-main-navbar',
  styleUrl: 'bjeck-main-navbar.scss'
})

export class BjeckMainNavbar {

  @Prop() brand: string;

  @Event() openBtn: EventEmitter

  openBtnHandler() {
    this.openBtn.emit();
  }

  render() {
    return (
      <nav>
        <span id="open-side-btn">
          <a href="#" onClick={this.openBtnHandler.bind(this)}>
            <svg height="100%" viewBox="0 0 30 30">
              <g stroke="#fff" stroke-width="3">
                <path d="M0,5 30,5" />
                <path d="M0,14 30,14" />
                <path d="M0,23 30,23" />
              </g>
            </svg>
          </a>
        </span>
        <p id="branding">{this.brand}</p>
        <slot name="main" />
      </nav>
    );
  }
}
