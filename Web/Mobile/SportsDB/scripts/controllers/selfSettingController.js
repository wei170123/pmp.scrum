angular.module('ptLineBot_SportsDB').controller('SelfSettingController', ['$rootScope', '$location', '$state', '$stateParams', '$window', 'SelfSettingService', 'AlertService', function ($rootScope, $location, $state, $stateParams, $window, SelfSettingService, AlertService) {
    self = this;
    self.checkedList = [];

    var init = function () {
        $rootScope.sports.uid = $stateParams.uid;
        SelfSettingService.getSportsList($rootScope.sports.uid, function (data) {
            self.sports = data;
        });
    };

    init();

    self.boxClick = function (checkStatus, value, index) {
        if (checkStatus) {
            var callback = function () {
                $rootScope.sports.details.push($rootScope.sports.id);
                $rootScope.sports.numbers.push($rootScope.sports.number);
                $rootScope.sports.setTimesArr.push($rootScope.sports.setTimes);
            }
            $rootScope.sports.id = value;
            AlertService.settingNumber(callback, self.checkedList, index);
        }
        else {
            var index = $rootScope.sports.details.indexOf(value);
            $rootScope.sports.details.splice(index, 1);
            $rootScope.sports.numbers.splice(index, 1);
            $rootScope.sports.setTimesArr.splice(index, 1);
        }
        // console.log($rootScope.sports);
    };

    self.confirm = function () {
        if ($rootScope.sports.details.length) {
            var callBack = function () {
                SelfSettingService.confirm($rootScope.sports, function (data) {
                    if (data.error)
                        AlertService.alertPopup('錯誤！', data.error);
                    else {
                        $window.location.href = $rootScope.url + '/lineUserSports/index?uid=' + $stateParams.uid;
                    }

                });
            }
            AlertService.showPopup(callBack);
        } else {
            AlertService.alertPopup('錯誤！', "請選擇運動!");
        }
    }

    self.create = function () {
        $window.location.href = $rootScope.url + '/selfSetting?uid=' + $stateParams.uid;
    }

}]);
