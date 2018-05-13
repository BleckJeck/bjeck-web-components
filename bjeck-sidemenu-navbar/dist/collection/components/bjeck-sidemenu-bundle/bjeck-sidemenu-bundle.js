export class BjeckSidemenuBundle {
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
