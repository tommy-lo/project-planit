angular.module('pfilters', [])
  .controller('pfiltercontroller', ['$scope', 'http', PFilterConroller]);

function PFilterController($scope, $http) {
  var toggles = [
    {name: 'parks',       state:true},
    {name: 'museums',     state:true},
    {name: 'restaurants', state:true},
    {name: 'movies',      state:true}];

  $scope.getPreferences = function() {
    var preferences = [];
    $scope.toggles.forEach(function(toggle) {
      if (toggle.state = true){
        preferences.push(toggle.name);
      }
    })
  }
}

function PFilterController(){

}
