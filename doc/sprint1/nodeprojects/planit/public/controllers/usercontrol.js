var User = angular.module("User",[]);
User.controller('usercontroller', ['$scope', '$http', function($scope, $http){
    // Scope for username and password
    $scope.addUser = function(name, password){
    $scope.password = password;
    $scope.name = name;
    var data = JSON.stringify({ username: name, password: password });

    $http.post('users/addUser', data).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.response = "successfully added " + name;
      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.response = "fail";
    });
    };   
}]);

