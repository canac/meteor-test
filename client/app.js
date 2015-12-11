const app = angular.module('test', ['angular-meteor']);

app.controller('TestCtrl', function($scope) {
  $scope.selectItem = function(item) {
    $scope.selectedId = item._id;
  };

  $scope.helpers({
    items() {
      return Items.find();
    },

    selectedItem() {
      return Items.findOne($scope.selectedId);
    },
  });
});
