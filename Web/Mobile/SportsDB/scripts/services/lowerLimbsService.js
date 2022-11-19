angular.module('ptLineBot_SportsDB').service('LowerLimbsService', ['$rootScope', '$http', function ($rootScope, $http) {
    var self = this;

    self.getSportsList = function (onSuccess) {
        $http.get($rootScope.url + '/sports?bodyType=LOWERLIMBS').
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
    };

    self.confirm = function (sports, onSuccess) {
        $http.post($rootScope.url + '/lineUserSports/save', sports).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
    };
}]);