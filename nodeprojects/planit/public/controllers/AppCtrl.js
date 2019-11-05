var app = angular.module("app",[]);
app.controller('AppCtrl', ['$scope', function($scope){
    // Scope for the button under start/end time.
    var _name = '';
    $scope.entertime = function(){
        $scope.enter = 'Date has been entered';
    };
    // Scope for the button under distance.
    $scope.enterdistance = function(){
        $scope.enter = 'Distanced has been entered';
    };


    $scope.date ={
        start: function(newName2){
            return arguments.length ? (_name = newName2) : _name;
        }
    };
    $scope.addContact = function(){
        console.log($scope.distance);
    }
    console.log('Hello from controller!');
   
}]);