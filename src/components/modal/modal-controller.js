'use strict';

angular.module('hw6')

  .controller('modalCtrl', function ($scope, $modalInstance, getStrings) {
    $scope.strings = getStrings;

    $scope.ok = function () {
      $modalInstance.close($scope.strings.okLabel);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss($scope.strings.cancelLabel);
    };
  })
;
