angular.module('ptLineBot_SportsDB').service('LineUserSportsDetailService', ['$rootScope', '$http', function ($rootScope, $http) {
    var self = this;

    self.getLineUserSportsList = function (uid, onSuccess) {
        $http.get($rootScope.url + '/lineUserSports?uid=' + uid).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
    };

    self.deleteSportsDetail = function (sportsDetail, onSuccess) {
        $http.post($rootScope.url + '/lineUserSports/delete', sportsDetail).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
    };
}]);