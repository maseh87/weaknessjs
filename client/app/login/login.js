angular.module('app.login', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      templateUrl: '/app/login/login.tpl.html',
      controller: 'LoginController'
    });
})
.controller('LoginController', function($scope, $http, $state, $window) {
  $scope.signup = function(credentials) {
    $http({
      method: 'POST',
      url: '/signup',
      data: credentials
    }).then(function(res) {
      $state.go('app.todos');
    });
  };

  $scope.openWindow = function() {
    $window.open('http://localhost:3000/github', '_blank', 'location=0,status0,modal=yes,alwaysRaised=yes,width=800,height=600');
  };
});