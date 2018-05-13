export class BjeckSideNavbar {
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
    static get style() { return "/**style-placeholder:bjeck-side-navbar:**/"; }
}
