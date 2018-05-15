export class BjeckSidemenuBundle {
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
