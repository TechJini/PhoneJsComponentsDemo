MyApp.home = function(params) {
    var pageItems = [{
            name: 'ListView',
            page: 'listview'
        }, {
            name: 'DateTime Picker',
            page: 'datepicker'
        }, {
            name: 'Switches',
            page: 'switch'
        }, {
            name: 'Seek bar',
            page: 'seekbar'
        }, {
            name: 'Check Box',
            page: 'checkbox'
        }, {
            name: 'Radio Group',
            page: 'radio'
        }, {
            name: 'EditText/TextView',
            page: 'edittext'
        }, {
            name: 'Button',
            page: 'button'
        }, {
            name: 'Dropdown',
            page: 'picker'
        }, {
            name: 'Progress Bar',
            page: 'spinner'
        }, {
            name: 'Dialogs',
            page: 'alert'
        }
        // , {
        //     name: 'TabView',
        //     page: 'tabview'
        // }, {
        //     name: 'SearchBar/AutoComplete',
        //     page: 'searchbar'
        // }, {
        //     name: 'Expandable ListView/Accordion View',
        //     page: 'accordion'
        // }, {
        //     name: 'GridView/Collection view',
        //     page: 'gridview'
        // }, {
        //     name: 'ScrollView',
        //     page: 'scrollview'
        // }, {
        //     name: 'View Pager',
        //     page: 'viewpager'
        // }, {
        //     name: 'Rating Bar',
        //     page: 'rating'
        // }, {
        //     name: 'Menu/Application Bar',
        //     page: 'menu'
        // }, {
        //     name: 'Animations',
        //     page: 'animation'
        // }, {
        //     name: 'Pull to refresh',
        //     page: 'pulltorefresh'
        //}
    ]
    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            load: function(options) {

                return pageItems;
            },
            map: function(item) {
                return {
                    name: item.name,
                    page: item.page
                };
            }
        })
    };

    return viewModel;
};