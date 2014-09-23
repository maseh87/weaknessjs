var app = angular.module('todo', []);

app.controller('TodoController', function($scope, $http) {
  $scope.todo = '';

  $http.get('/todos').then(function(res) {
    $scope.todos = res.data;
  });

  $scope.submit = function() {
    if($scope.todo !== '') {
      $http({
        method: 'POST',
        url: '/todos',
        data: {todo: $scope.todo}
      }).then(function(res) {
        $scope.todos.push(res.data);
        $scope.todo = '';
      });
    }
  };
});