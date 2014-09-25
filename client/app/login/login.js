angular.module('app.login', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: 'login',
      templateUrl: '/app/login/login.tpl.html',
      controller: 'LoginController'
    });
})
.controller('LoginController', function($scope, $http, $state, $window, $interval) {
  $scope.signup = function(credentials) {
    $http({
      method: 'POST',
      url: '/signup',
      data: credentials
    }).then(function(res) {
      $state.go('app.todos');
    });
  };
  var githubWindow;
  $scope.openWindow = function() {
    githubWindow = $window.open('http://localhost:3000/github', '_blank', 'location=0,status0,modal=yes,alwaysRaised=yes,width=800,height=600');
    $interval(function() {
      if(githubWindow.closed) {
        console.log('it closed');
        //once its closed stop interval
        //get the cookie
        //make a server call to get the user info
        //do what i got to do with the user info
      }
    }, 2000);
  };
});