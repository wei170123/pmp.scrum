angular.module('ptLineBot_SportsDB').config(['$ionicConfigProvider', '$stateProvider', '$urlRouterProvider', function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/user');
    $stateProvider
        .state('sportsDetail', {
            url: '/sportsDetail/:uid',
            templateUrl: 'views/lineUserSportsDetail.html',
            controller: 'LineUserSportsDetailController',
            controllerAs: 'lsCtrl'
        })
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'views/tab.html',
            controller: 'TabController',
            controllerAs: 'tabCtrl'
        })
        .state('tab.upperLimbs', {
            url: '/upperLimbs/:uid',
            cache: true,
            views: {
                'tabContent-upperLimbs': {
                    templateUrl: 'views/upperLimbs.html',
                    controller: 'UpperLimbsController',
                    controllerAs: 'ulCtrl'
                }
            }
        })
        .state('tab.neck', {
            url: '/neck/:uid',
            cache: true,
            views: {
                'tabContent-neck': {
                    templateUrl: 'views/neck.html',
                    controller: 'NeckController',
                    controllerAs: 'nCtrl'
                }
            }
        })
        .state('tab.trunk', {
            url: '/trunk/:uid',
            cache: true,
            views: {
                'tabContent-trunk': {
                    templateUrl: 'views/trunk.html',
                    controller: 'TrunkController',
                    controllerAs: 'tCtrl'
                }
            }

        })
        .state('tab.lowerLimbs', {
            url: '/lowerLimbs/:uid',
            cache: true,
            views: {
                'tabContent-lowerLimbs': {
                    templateUrl: 'views/lowerLimbs.html',
                    controller: 'LowerLimbsController',
                    controllerAs: 'llCtrl'
                }
            }
        })
        .state('tab.selfSetting', {
            url: '/selfSetting/:uid',
            cache: true,
            views: {
                'tabContent-selfSetting': {
                    templateUrl: 'views/selfSetting.html',
                    controller: 'SelfSettingController',
                    controllerAs: 'ssCtrl'
                }
            }
        })
    $ionicConfigProvider.tabs.position('bottom');
}]);
