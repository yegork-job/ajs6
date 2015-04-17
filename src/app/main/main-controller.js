'use strict';

angular.module('hw6')

  .config(function ($stateProvider) {
    $stateProvider
      .state('main',
      {
        abstract: true,
        templateUrl: 'app/main/main.html'
      });
  })
;
