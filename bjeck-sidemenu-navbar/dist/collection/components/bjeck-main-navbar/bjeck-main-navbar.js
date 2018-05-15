export class BjeckMainNavbar {
    openBtnHandler() {
        this.openBtn.emit();
    }
    render() {
        return (h("nav", null,
            h("span", { id: "open-side-btn" },
                h("a", { href: "#", onClick: this.openBtnHandler.bind(this) },
                    h("svg", { height: "100%", viewBox: "0 0 30 30" },
                        h("g", { stroke: "#fff", "stroke-width": "3" },
                            h("path", { d: "M0,5 30,5" }),
                            h("path", { d: "M0,14 30,14" }),
                            h("path", { d: "M0,23 30,23" }))))),
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
    static get style() { return "/**style-placeholder:bjeck-main-navbar:**/"; }
}
