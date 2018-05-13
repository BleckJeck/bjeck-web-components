/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class BjeckMainNavbar {
    openBtnHandler() {
        this.openBtn.emit();
    }
    render() {
        return (h("nav", null,
            h("span", null,
                h("a", { href: "#", onClick: this.openBtnHandler.bind(this) },
                    h("svg", { width: "30", height: "30" },
                        h("path", { d: "M0,5 30,5", stroke: "#fff", "stroke-width": "5" }),
                        h("path", { d: "M0,14 30,14", stroke: "#fff", "stroke-width": "5" }),
                        h("path", { d: "M0,23 30,23", stroke: "#fff", "stroke-width": "5" })))),
            h("slot", { name: "main" })));
    }
    static get is() { return "bjeck-main-navbar"; }
    static get events() { return [{
            "name": "openBtn",
            "method": "openBtn",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "bjeck-main-navbar nav {\n  background-color: blue; }"; }
}

class BjeckSideNavbar {
    closeBtnHandler() {
        this.closeBtn.emit();
    }
    render() {
        return (h("div", null,
            h("a", { href: "#", onClick: this.closeBtnHandler.bind(this) }, "\u00D7"),
            h("slot", { name: "side" })));
    }
    static get is() { return "bjeck-side-navbar"; }
    static get events() { return [{
            "name": "closeBtn",
            "method": "closeBtn",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ""; }
}

class BjeckSidemenuBundle {
    constructor() {
        this.sideMenuWidth = { "display": "none" };
    }
    openSideMenuHandler() {
        this.sideMenuWidth = { "display": "block" };
    }
    closeSideMenuHandler() {
        this.sideMenuWidth = { "display": "none" };
    }
    render() {
        return ([
            h("bjeck-main-navbar", null,
                h("slot", { name: "main" })),
            h("bjeck-side-navbar", { style: this.sideMenuWidth },
                h("slot", { name: "side" }))
        ]);
    }
    static get is() { return "bjeck-sidemenu-bundle"; }
    static get properties() { return {
        "sideMenuWidth": {
            "state": true
        }
    }; }
    static get listeners() { return [{
            "name": "openBtn",
            "method": "openSideMenuHandler"
        }, {
            "name": "closeBtn",
            "method": "closeSideMenuHandler"
        }]; }
}

export { BjeckMainNavbar, BjeckSideNavbar, BjeckSidemenuBundle };
