angular.module('todoApp', [
  'ui.router',
  'app.login',
  'app.todos'
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
