var date = ko.observable(new Date());
var time = ko.observable(new Date());
var dateTime = ko.observable(new Date());

var buttonClicked = function(e) {
    var str = "Date: " + Globalize.format(date(), 'dd/MM/yyyy') +
        "\nTime: " + Globalize.format(time(), 'HH:mm') +
        "\nDateTime: " + Globalize.format(dateTime(), 'dd/MM/yyyy HH:mm');
    alert(str);
};

var dxCheckbox = {
    checked: ko.observable(false)
}
var dxSwitch = {
    value: ko.observable(true)
}

var dxRadioGroup = {
    items: [{
        text: "Tea"
    }, {
        text: "Coffee"
    }, {
        text: "Juice"
    }]
}

var dxSlider = {
    value: ko.observable(5)
}

var dxSelectbox = {
    data: ["Sencha Touch", "Kendo","PhoneJs","Ionic"],
    value: ko.observable(null)
}

var length = 10;
var lengthDescription = "10 characters maximum";

var passMode = "password";
var secretDescription = "type a password";

var readonly = true;
var readonlyDescription = "read-only text box";


popupVisible = ko.observable(false);
showPopup = function() {
    popupVisible(true);
};
hidePopup = function() {
    popupVisible(false);
}

var loadPanelVisible = ko.observable(false);
var finishLoading = function() {
    loadPanelVisible(false);
};
var startLoading = function() {
    loadPanelVisible(true);
    setTimeout($.proxy(finishLoading, this), 3000);
};



//PopUp
        var loadPanel= {
            visible: ko.observable(false),
            startLoading: function() {
                loadPanel.visible(true);
                setTimeout(loadPanel.finishLoading, 3000);
            },
            finishLoading: function() {
                loadPanel.visible(false);
            }
        }
        var popup={
            visible: ko.observable(false),
            showPopup: function() {
                popup.visible(true);
            },
            hidePopup: function() {
                popup.visible(false);
            }
        }
        var actionsheet= {
            visible: ko.observable(false),
            showActionSheet: function() {
                actionsheet.visible(true);
            },
            items: [
                {
                    text: "Delete",
                    clickAction: function() { alert("Delete"); },
                    type: "danger"
                },
                {
                    text: "Reply",
                    clickAction: function() { alert("Reply"); }
                },
                {
                    text: "Forward",
                    clickAction: function() { alert("Forward"); }
                },
                {
                    text: "Save Image",
                    clickAction: function() { alert("Save Image"); },
                    disabled: true
                }
            ]
        }
        var toast= {
            toastInfoVisible: ko.observable(false),
            toastErrorVisible: ko.observable(false),
            toastSuccessVisible: ko.observable(false),
            toastWarningVisible: ko.observable(false),
            toastCustomVisible: ko.observable(false),

            showInfo: function() {
                this.toastInfoVisible(true);
            },
            showError: function() {
                this.toastErrorVisible(true);
            },
            showSuccess: function() {
                this.toastSuccessVisible(true);
            },
            showWarning: function() {
                this.toastWarningVisible(true);
            },
            showCustom: function() {
                this.toastCustomVisible(true);
            }
        }
        var popover= {
            visible: ko.observable(false),
            toggle: function() {
                popover.visible(!popover.visible());
            },
            close: function() {
                popover.visible(false);
            },
            colors: ["Red", "Green", "Blue", "White", "Black"]
        }
        var dialogs= {
            notify: function(){
                DevExpress.ui.notify("Sample message", "success", 1000);
            },
            alert: function() {
                DevExpress.ui.dialog.alert("Sample message", "Alert");
            },
            confirm: function() {
                DevExpress.ui.dialog.confirm("Sample message", "Confirm");
            },
            custom: {
                show: function() {
                    var replace = function() {
                        return "Replace";
                    };
                    var rename = function() {
                        return "Rename";
                    };
                    var customDialog = DevExpress.ui.dialog.custom({
                        title: "Item exists",
                        message: "<strong><em>The item already exists</em></strong>",
                        buttons: [
                            { text: "Replace", clickAction: replace },
                            { text: "Rename", clickAction: rename }
                        ]
                    });
                    customDialog.show().done(function(dialogResult) {
                        DevExpress.ui.notify(dialogResult, "info", 1000);
                    });
                }
            }
        }