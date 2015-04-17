'use strict';

angular.module('hw6')
  .controller('page2Ctrl', function ($stateParams, $scope) {
    $scope.mes = $stateParams.par1;
  })

  .config(function ($stateProvider, menuProvider) {
    $stateProvider
      .state('main.page2',
      {
        url: '/page2',
        templateUrl: 'app/page2/page2.html',
        controller: 'page2Ctrl',
        params: {
          par1: {value: ''}
        }
      });

    menuProvider
      .add({
        name: ['Разделы', 'Страницы', 'Страница 2'],
        state: 'main.page2({par1: "to page2"})',
        permission: ''
      });
  })
;
