angular.module('ptLineBot_SportsDB').controller('LineUserSportsDetailController', ['$scope', '$rootScope', '$location', '$state', '$stateParams', 'LineUserSportsDetailService', 'AlertService', function ($scope, $rootScope, $location, $state, $stateParams, LineUserSportsDetailService, AlertService) {
    self = this;

    var init = function () {
        console.log($stateParams.uid);
        // $location.url($location.path() + '/test');
        LineUserSportsDetailService.getLineUserSportsList($stateParams.uid, function (data) {
            self.userSports = data;
            // console.log(self.userSports);
        });
    };

    init();

    // delete the sportsDetail
    self.deleteSportsDetail = function (value) {
        LineUserSportsDetailService.deleteSportsDetail(value, function (data) {
            var idx = self.userSports.indexOf(value);
            self.userSports.splice(idx, 1);
        });
    };

}]);
