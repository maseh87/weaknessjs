angular.module('todoApp', [
  'ui.router',
  'app.login',
  'app.todos'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      template: '<div ui-view></div>'
    });
  $urlRouterProvider.otherwise('/todos');
})
.run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams, fromState, fromStateParams) {
    if(toState.authenticate) {
      event.preventDefault();
      console.log('Yep it works');
      $state.go('app.login');
    }
  });
});
