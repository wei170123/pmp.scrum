angular.module('ptLineBot_SportsDB').controller('TabController', ['$rootScope', '$ionicHistory', '$state', function ($rootScope, $ionicHistory, $state) {
    var self = this;

    self.goto = function (view) {
        $ionicHistory.nextViewOptions({
            historyRoot: true,
            disableAnimate: true
        });
        // $state.go("tab." + view);
        $state.go("tab." + view, { uid: $rootScope.sports.uid });
    }
}]);