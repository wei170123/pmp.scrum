angular.module('ptLineBot_SportsDB').service('SelfSettingService', ['$rootScope', '$http', function ($rootScope, $http) {
    var self = this;

    self.getSportsList = function (uid, onSuccess) {
        $http.get($rootScope.url + '/sports/self?bodyType=SELF&uid=' + uid).
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