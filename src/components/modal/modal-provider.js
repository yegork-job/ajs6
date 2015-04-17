'use strict';

angular.module('hw6')

  .provider('modal', function () {
    var strings = {
      title: 'Title',
      mes: ['To be or not to be?'],
      okLabel: 'Yes',
      cancelLabel: 'No'
    };

    this.$get = function ($modal) {
      return {
        setStrings: function (newStrings) {
          strings = newStrings;
        },
        show: function () {
          return $modal.open({
            templateUrl: 'components/modal/modal.html',
            controller: 'modalCtrl',
            backdrop: 'static',
            resolve: {
              getStrings: function () {
                return strings;
              }
            }
          }).result;
        }
      };
    };
  })
;
