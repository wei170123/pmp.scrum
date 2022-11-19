angular.module('ptLineBot_SportsDB').service('AlertService', ['$rootScope', '$filter', '$ionicPopup', function ($rootScope, $filter, $ionicPopup) {
    var self = this;
    self.alertPopup = function (title, alertMessage) {
        $ionicPopup.alert({
            title: title,
            template: alertMessage,
            buttons: [{
                text: '確定',
                type: 'button-dark',
            }]
        })
    }

    self.showPopup = function (callBackFunction) {
        $rootScope.sports.title = $filter('date')(new Date(), "yyyy-MM-dd") + " 處方";
        $rootScope.sports.noticeTime = new Date('2018-01-01 20:00');
        // console.log($rootScope.sports.noticeTime);
        var showPopUp = $ionicPopup.show({
            template: '<input type="text" ng-model="sports.title">'
                + '<input type="time" ng-model="sports.noticeTime">',
            title: '處方名稱 & 提醒時間',
            subTitle: '請確認處方名稱及提醒運動時間',
            scope: $rootScope,
            buttons: [
                { text: '取消' },
                {
                    text: '<b>確認</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if ($rootScope.sports.title) {
                            return true;
                        } else {
                            e.preventDefault();
                            return false;
                        }
                    }
                }
            ]
        });

        showPopUp.then(function (res) {
            if (res) {
                console.log($rootScope.sports);
                callBackFunction();

            } else {
                console.log('You are not sure');
            }
        });
    }

    self.settingNumber = function (callback, checkBoxArr, index) {
        $rootScope.sports.number = null;
        $rootScope.sports.setTimes = null;
        var showPopUp = $ionicPopup.show({
            template: '<input type="number" placeholder="組數" ng-model="sports.setTimes">&nbsp;' +
                '<input type="number" placeholder="次數" ng-model="sports.number">',
            title: '運動組數',
            subTitle: '請輸入每日運動次數',
            scope: $rootScope,
            buttons: [
                {
                    text: '取消',
                    onTap: function (e) {
                        checkBoxArr[index] = false;
                    }
                },
                {
                    text: '<b>確認</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if ($rootScope.sports.number && $rootScope.sports.setTimes) {
                            return true;
                        } else {
                            e.preventDefault();
                            return false;
                        }
                    }
                }
            ]
        });

        showPopUp.then(function (res) {
            // console.log(res);
            console.log($rootScope.sports);
            if (res) {
                callback();
            } else {
            }

        });
    }
}]);