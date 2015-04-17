'use strict';
// Require lodash

angular.module('hw6')
  .provider('menu', function () {
    var items = [];

    var itemTemplate = {
      name: '',
      state: '',
      permission: '',
      subitems: []
    };

    this.$get = function () {
      return {
        getItems: function () {
          return items;
        }
      };
    };

    // TODO: надо будет сделать промисом, чтоб реджектить, когда невозможно создать пункт меню
    // Добавление элементов меню с сортировкой по таблице символов
    this.add = function(menuItem) {
      var existItem;
      if (typeof(menuItem.name) === 'string') {
        // Root menu item
        // Check if exist
        existItem = _.find(items, {'name': menuItem.name});
        if (existItem) {
          // Error: 'Menu item already exist'
          console.log('Menu item already exist');
        } else {
          // Adding menu item
          menuItem.subitems = [];
          items.push(_.clone(menuItem));
          items = _.sortBy(items, 'name');
        }
      } else {
        // Subitem
        var pos = 0;          // position in name array
        var prevExistItem;    // to know, where to add subitems, if they don't exist
        var newItem;
        // Navigating to the required submenu
        while (menuItem.name[pos]) {
          if (prevExistItem) {
            existItem = _.find(prevExistItem.subitems, {'name': menuItem.name[pos]});
          } else {
            existItem = _.find(items, {'name': menuItem.name[pos]});
          }
          // If no submenu, create it
          if (!existItem) {
            newItem = _.clone(itemTemplate);
            newItem.name = menuItem.name[pos];
            newItem.subitems = [];
            if (prevExistItem) {
              // Check if exist
              existItem = _.find(prevExistItem.subitems, {'name': newItem.name});
              if (existItem) {
                // Error: 'Menu item already exist'
                console.log('Menu item already exist');
                break;
              } else {
                prevExistItem.subitems.push(newItem);
                prevExistItem.subitems = _.sortBy(prevExistItem.subitems, 'name');
                prevExistItem = _.find(prevExistItem.subitems, {'name': newItem.name});
              }
            } else {
              // New root menu item
              items.push(newItem);
              items = _.sortBy(items, 'name');
              prevExistItem = _.find(items, {'name': newItem.name});
            }
          } else {
            prevExistItem = existItem;
          }
          pos++;
        }
        // Adding rest menu item fields
        if (!existItem) {
          prevExistItem.state = menuItem.state;
          prevExistItem.permission = menuItem.permission;
        }
      }
    };
  });
