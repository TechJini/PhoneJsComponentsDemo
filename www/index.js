(function() {
    "use strict";

    var MyApp = window.MyApp = {};

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,

            navigationType: "simple",
            navigation: [{
                title: "Home",
                action: "#home",
                icon: "home"
            }]
        });

        MyApp.app.router.register(":view", {
            view: "home"
        });
        MyApp.app.navigate();
    });

})();