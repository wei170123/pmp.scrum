angular.module('ptLineBot_SportsDB').run(['$rootScope', function ($rootScope) {
    $rootScope.url = 'https://donesee.weiyuanyuan.idv.tw:4000';
    $rootScope.sports = {};
    $rootScope.sports.details = [];
    $rootScope.sports.number;
    $rootScope.sports.numbers = [];
    $rootScope.sports.setTimes;
    $rootScope.sports.setTimesArr = [];
    $rootScope.sports.id;
    $rootScope.sports.number;
    $rootScope.sports.noticeTime;
}]);
