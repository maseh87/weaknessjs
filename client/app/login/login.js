angular.module('app.login', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      templateUrl: '/app/login/login.tpl.html',
      controller: 'LoginController'
    });
})
.controller('LoginController', function($scope, $http, $state) {
  $scope.signup = function(credentials) {
    $http({
      method: 'POST',
      url: '/signup',
      data: credentials
    }).then(function(res) {
      $state.go('app.todos');
    });
  };
});