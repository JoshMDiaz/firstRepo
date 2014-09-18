'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'iPhone 6 Plus',
     'snippet': 'Super HUGE phone that is pretty sweet too.'},
    {'name': 'Samsung Galaxy S5',
     'snippet': 'Really fast and stuff like that.'},
    {'name': 'Joshey Xtreme',
     'snippet': 'It is extreme! Enough said...'},
      {'name': 'UltimoPad',
      'snippet': 'Ultimate notepad that is cool.'}
  ];
});
