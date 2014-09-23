angular.module('todoApp', [
  'ui.router',
  'app.login'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: '../index.html',
      abstract: true
    });
  $urlRouterProvider.otherwise('/login');
});
