angular.module('todoApp', [
  'ui.router',
  'app.login'
])
.config(function($stateProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: '../index.html',
      abstract: true
    });
});
