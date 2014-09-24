angular.module('app.todos', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.todos', {
      url: 'todos',
      templateUrl: '/app/todos/todos.tpl.html',
      controller: 'TodosController'
    });
})
.controller('TodosController', function($scope, $http) {
  $scope.todo = '';

  $http.get('/todos').then(function(res) {
    $scope.todos = res.data;
  });

  $scope.submit = function() {
    $http({
      method: 'POST',
      url: '/todos',
      data: {todo: $scope.todo}
    }).then(function(res) {
      $scope.todos.push(res.data);
      $scope.todo = '';
    });
  };

  $scope.finished = function(index) {
    console.log($scope.todos[index]);
    $http({
      method: 'POST',
      url: '/delete',
      data: $scope.todos[index]
    }).then(function(res) {
      $scope.todos = res.data;
    });
  };
});