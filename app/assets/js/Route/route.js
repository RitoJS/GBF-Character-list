(function() {
    // "use"
    angular.module('RitoJS').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/page-non-trouvee');

        $locationProvider.html5Mode(true);

        $stateProvider
        // Layout
            .state('layout', {
                abstract: true,
                cache: false,
                templateUrl: 'assets/tpl/layout/layout.html'
            })
            .state('index', {
                url: '/',
                templateUrl: 'assets/tpl/pages/presentation.html',
                cache: false,
                parent: 'layout'
            })
            .state('404', {
                url: '/page-non-trouvee',
                templateUrl: 'assets/tpl/pages/404.html',
                cache: false,
                parent: 'layout'
            })
    });
})();