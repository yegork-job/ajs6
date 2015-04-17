'use strict';

angular.module('hw6')
  .controller('navBarCtrl', function ($scope, menu) {
    $scope.items = menu.getItems();
  });
