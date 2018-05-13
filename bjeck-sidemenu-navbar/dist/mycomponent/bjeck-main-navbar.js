/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class BjeckMainNavbar {
    openBtnHandler() {
        this.openBtn.emit();
    }
    render() {
        return (h("nav", null,
            h("span", null,
                h("a", { id: "open-side-menu", href: "#", onClick: this.openBtnHandler.bind(this) },
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
    static get style() { return "bjeck-main-navbar nav {\n  background-color: #3b5998;\n  overflow: hidden;\n  height: 63px; }\n  bjeck-main-navbar nav ul {\n    float: right;\n    margin: 8px 0 0 0;\n    list-style: none; }\n    bjeck-main-navbar nav ul li {\n      display: inline-block; }\n      bjeck-main-navbar nav ul li a {\n        color: #f2f2f2;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n        font-size: 17px; }\n      bjeck-main-navbar nav ul li a:hover {\n        background-color: #ddd;\n        color: #000; }"; }
}

class BjeckSideNavbar {
    closeBtnHandler() {
        this.closeBtn.emit();
    }
    render() {
        return (h("div", { id: "wrapper" },
            h("a", { id: "close-side-menu", href: "#", onClick: this.closeBtnHandler.bind(this) }, "\u00D7"),
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
    static get style() { return "bjeck-side-navbar {\n  width: 0;\n  overflow-x: hidden;\n  height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: black;\n  padding-top: 60px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n  bjeck-side-navbar ul {\n    list-style: none; }\n    bjeck-side-navbar ul a {\n      padding: 10px 10px 10px 30px;\n      text-decoration: none;\n      font-size: 22px;\n      color: #ccc;\n      display: block;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n    bjeck-side-navbar ul a:hover {\n      color: #fff; }\n  bjeck-side-navbar a#close-side-menu {\n    position: absolute;\n    top: 0;\n    right: 22px;\n    font-size: 36px;\n    margin-left: 50px;\n    text-decoration: none;\n    color: #ccc; }"; }
}

class BjeckSidemenuBundle {
    constructor() {
        this.sideMenuWidth = { "width": "0px" };
    }
    openSideMenuHandler() {
        this.sideMenuWidth = { "width": "250px" };
    }
    closeSideMenuHandler() {
        this.sideMenuWidth = { "width": "0px" };
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
