'use strict';

angular.module('hw6')
  .controller('page3Ctrl', function ($stateParams, $scope) {
    $scope.mes = $stateParams.par1;
  })

  .config(function ($stateProvider, menuProvider) {
    $stateProvider
      .state('main.page3',
      {
        url: '/page3',
        templateUrl: 'app/page3/page3.html',
        controller: 'page3Ctrl',
        params: {
          par1: {value: ''}
        }
      });

    menuProvider
      .add({
        name: ['Разделы', 'Страницы', 'Страница 3'],
        state: 'main.page3({par1: "to page3"})',
        permission: ''
      });
  })
;
