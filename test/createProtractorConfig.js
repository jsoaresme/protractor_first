module.exports = (providedConfig) => {
    const defaultConfig = {
        baseUrl: "https://www.google.com/",
        specs: ["specs/*.spec.js"],
        //directConnect: true,
        onPrepare: () => {
            browser.ignoreSynchronization = true;
            afterEach(() => {
                browser.manage().deleteAllCookies();
                return browser.executeScript("sessionStorage.clear(); localStorage.clear();");
            });
        },
    };

    return Object.assign(
        {},
        defaultConfig,
        providedConfig
    );
};
