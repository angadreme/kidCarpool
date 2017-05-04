namespace kideventcarpool {

    angular.module('kideventcarpool', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: kideventcarpool.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: kideventcarpool.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('SuperDashBoard', {
              url: '/superdashboard',
              templateUrl: '/ngapp/views/superdashboard.html',
              controller: kideventcarpool.Controllers.SuperDashBoardController,
              controllerAs: 'controller'
            })
            .state('organizationDashboard', {
              url: '/organizationdashboard/:id',
              templateUrl: '/ngApp/views/organizationDashboard.html',
              controller:kideventcarpool.Controllers.OrganizationDashboardController,
              controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
