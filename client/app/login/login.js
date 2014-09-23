angular.module('app.login', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      templateUrl: '/app/login/login.tpl.html',
      controller: 'LoginController'
    });
})
.controller('LoginController', function($scope) {

});