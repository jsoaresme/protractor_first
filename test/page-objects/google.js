const GoogleComponent = require("../components/google/google");

class Google {
    constructor() {
        this.relativeUrl = "";

        this.search = new GoogleComponent();
    }
}

module.exports = Google;