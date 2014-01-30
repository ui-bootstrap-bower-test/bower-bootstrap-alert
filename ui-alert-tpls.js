/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/
 * Version: 0.11.0 - 2014-01-30
 * License: MIT
 */



angular.module('ui.bootstrap.alert', [])

.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
  $scope.closeable = 'close' in $attrs;
}])

.directive('alert', function () {
  return {
    restrict:'EA',
    controller:'AlertController',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '@',
      close: '&'
    }
  };
});

angular.module('template/alert/alert.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('template/alert/alert.html',
    '<div class="alert" ng-class=""alert-" + (type || "warning")"><button ng-show="closeable" type="button" class="close" ng-click="close()">&times;</button><div ng-transclude=""></div></div>');
}]);
