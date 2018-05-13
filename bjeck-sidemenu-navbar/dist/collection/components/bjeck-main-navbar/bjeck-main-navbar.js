export class BjeckMainNavbar {
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
    static get style() { return "/**style-placeholder:bjeck-main-navbar:**/"; }
}
