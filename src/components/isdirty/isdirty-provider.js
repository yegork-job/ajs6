'use strict';

angular.module('hw6')

  .provider('isDirty', function () {
    var dirty = false;

    this.$get = function () {
      return {
        isDirty: function () {
          return dirty;
        },
        check: function (text) {
          dirty = !!text;
        },
        reset: function () {
          dirty = false;
        }
      };
    };
  })
;
