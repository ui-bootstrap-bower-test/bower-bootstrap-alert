/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/
 * Version: 0.11.0-SNAPSHOT - 2014-01-24
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
