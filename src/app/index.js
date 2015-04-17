'use strict';

angular.module('hw6', ['ui.router', 'ui.bootstrap'])

  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      $injector.invoke(function ($state) {
        $state.go('main.page1');
      });
    });
  })

  .run(function ($rootScope, isDirty, $state, modal) {
    var strings = {
      title: 'Подтверждение перехода',
      mes: [
        'Измененные данные не сохранены. При переходе они будут утеряны.',
        '',
        'Вы действительно хотите перейти?'
      ],
      okLabel: 'Перейти',
      cancelLabel: 'Остаться'
    };

    modal.setStrings(strings);

    $rootScope.$on('$stateChangeStart',
      function (event, toState, toParams, fromState, fromParams) {
        if (isDirty.isDirty()) {
          // Останавливаем переход
          event.preventDefault();

          // Если пользователь подтверждает, продолжаем переход
          modal.show().then(
            function () {
              isDirty.reset();
              $state.go(toState.name, toParams);
            }
          );
        }
      });
  })
;
