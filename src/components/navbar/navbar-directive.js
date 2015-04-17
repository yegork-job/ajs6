'use strict';

angular.module('hw6')
  .directive('navBar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: 'navBarCtrl'
    };
  });
