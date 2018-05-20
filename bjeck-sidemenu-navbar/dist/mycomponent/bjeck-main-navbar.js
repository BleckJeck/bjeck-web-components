/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class BjeckMainNavbar {
    openBtnHandler() {
        this.openBtn.emit();
    }
    render() {
        return (h("nav", null,
            h("span", { id: "open-side-btn", onClick: this.openBtnHandler.bind(this) },
                h("svg", { height: "100%", viewBox: "0 0 30 30" },
                    h("g", { stroke: "#fff", "stroke-width": "3" },
                        h("path", { d: "M0,5 30,5" }),
                        h("path", { d: "M0,14 30,14" }),
                        h("path", { d: "M0,23 30,23" })))),
            h("p", { id: "branding" }, this.brand),
            h("slot", { name: "main" })));
    }
    static get is() { return "bjeck-main-navbar"; }
    static get properties() { return {
        "brand": {
            "type": String,
            "attr": "brand"
        }
    }; }
    static get events() { return [{
            "name": "openBtn",
            "method": "openBtn",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "bjeck-main-navbar nav {\n  background-color: #3b5998;\n  overflow: hidden;\n  height: 4em;\n  z-index: 10;\n  width: 100%;\n  color: #f2f2f2;\n  margin-bottom: 2em;\n  position: fixed; }\n  bjeck-main-navbar nav span#open-side-btn {\n    margin: 0;\n    float: left;\n    cursor: pointer; }\n    bjeck-main-navbar nav span#open-side-btn svg {\n      margin: 1em;\n      height: 2em; }\n  bjeck-main-navbar nav p#branding {\n    margin: 0;\n    margin-left: 5vw;\n    float: left;\n    font-size: 2em;\n    height: 4em;\n    line-height: 2em; }\n  bjeck-main-navbar nav ul {\n    margin: 0;\n    margin-right: 10vw;\n    float: right;\n    list-style: none; }\n    bjeck-main-navbar nav ul li {\n      display: inline-block;\n      height: 4em;\n      line-height: 4em; }\n      bjeck-main-navbar nav ul li a {\n        color: #f2f2f2;\n        text-align: center;\n        padding: 1.5em 1em;\n        text-decoration: none;\n        font-size: 1em; }\n      bjeck-main-navbar nav ul li a:hover {\n        background-color: #ddd;\n        color: #000; }\n\n\@media (max-width: 800px) {\n  bjeck-main-navbar nav span#open-side-btn {\n    margin-left: 10vw; }\n  bjeck-main-navbar nav p#branding {\n    float: right;\n    margin-right: 15vw;\n    margin-left: 0; }\n  bjeck-main-navbar nav ul {\n    display: none; } }"; }
}

class BjeckSideNavbar {
    closeBtnHandler() {
        this.closeBtn.emit();
    }
    render() {
        return (h("div", { id: "wrapper" },
            h("span", { id: "close-side-menu", onClick: this.closeBtnHandler.bind(this) }, "\u00D7"),
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
    static get style() { return "bjeck-side-navbar {\n  width: 0;\n  overflow-x: hidden;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  background-color: #2f2f2f;\n  padding-top: 3rem;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n  bjeck-side-navbar ul {\n    list-style: none; }\n    bjeck-side-navbar ul a {\n      padding: 10px 10px 10px 30px;\n      text-decoration: none;\n      font-size: 22px;\n      color: #ccc;\n      display: block;\n      -webkit-transition: 0.3s;\n      transition: 0.3s; }\n    bjeck-side-navbar ul a:hover {\n      color: #fff; }\n  bjeck-side-navbar span#close-side-menu {\n    position: absolute;\n    top: 0;\n    right: 22px;\n    font-size: 36px;\n    margin-left: 50px;\n    text-decoration: none;\n    color: #ccc;\n    cursor: pointer; }"; }
}

class BjeckSidemenuBundle {
    constructor() {
        this.sideMenuWidth = { "width": "0" };
    }
    openSideMenuHandler() {
        this.sideMenuWidth = { "width": "250px" };
    }
    closeSideMenuHandler() {
        this.sideMenuWidth = { "width": "0" };
    }
    render() {
        return ([
            h("bjeck-main-navbar", { brand: this.brand },
                h("slot", { name: "main" })),
            h("bjeck-side-navbar", { style: this.sideMenuWidth },
                h("slot", { name: "side" }))
        ]);
    }
    static get is() { return "bjeck-sidemenu-bundle"; }
    static get properties() { return {
        "brand": {
            "type": String,
            "attr": "brand"
        },
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
