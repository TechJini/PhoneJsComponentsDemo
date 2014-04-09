var PAGE_SIZE = 10;

//An object passed to the dataSource configuration option of the list
pullToRefreshDataSource = new DevExpress.data.DataSource({
    store: [],
    pageSize: 1000
});

//Loads json data and passes it to the DataSource
$.get('http://demos.telerik.com/kendo-ui/service/Products', function(data) {
    for (var i = 0; i < PAGE_SIZE; i++) {
        data[i].UnitPrice = "$ " + data[i].UnitPrice;
        pullToRefreshDataSource.store().insert(data[i]);
    }
    pullToRefreshDataSource.pageIndex(0);
    pullToRefreshDataSource.load();
}, "jsonp");

//Action when pulled to refresh
pulledToRefresh = function(e) {
    PAGE_SIZE += 10;
    $.get('http://demos.telerik.com/kendo-ui/service/Products', function(data) {
        for (var i = 0; i < PAGE_SIZE; i++) {
            data[i % 77].UnitPrice = "$ " + data[i % 77].UnitPrice;
            pullToRefreshDataSource.store().insert(data[i % 77]);
        }
        pullToRefreshDataSource.load();
    }, "jsonp");

}
//Actiom performed when the button is clicked
processClick = function(e) {
    DevExpress.ui.notify("The price of " + e.model.ProductName + " is " + e.model.UnitPrice + ".", "info", 1000);
}

//An object passed to the dataSource configuration option of the list
sectionHeadersDataSource = new DevExpress.data.DataSource([]);

//Loads json data and passes it to the DataSource
$.get('http://demos.telerik.com/kendo-ui/service/Products', function(data) {
    for (var i = 0; i < data.length; i++) {
        sectionHeadersDataSource.store().insert(data[i]);
    }
    sectionHeadersDataSource.group(function(dataItem) {
        return dataItem.ProductName.charAt(0); // body...
    });
    sectionHeadersDataSource.searchExpr("ProductName");
    sectionHeadersDataSource.load();
}, "jsonp");

//An object passed to the dataSource configuration option of the list
searchBarDataSource = new DevExpress.data.DataSource([]);

//Loads json data and passes it to the DataSource
$.get('http://demos.telerik.com/kendo-ui/service/Products', function(data) {
    for (var i = 0; i < data.length; i++) {
        data[i].UnitPrice = "$ " + data[i].UnitPrice;
        searchBarDataSource.store().insert(data[i]);
    }
    searchBarDataSource.pageIndex(0);
    searchBarDataSource.load();
}, "jsonp");

searchKeyChanged = function(data) {

    searchBarDataSource.filter("ProductName", "contains", data.actionValue);
    searchBarDataSource.load().done(function(result) {
        console.log(result);
    });

}