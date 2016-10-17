(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchList = "";
  $scope.message = "";

  $scope.displayMessage = function() {
    var comma = ',';
    var messageResult = "";
    var arrayCount = getArrayLength($scope.lunchList, comma);
    if (arrayCount === 0) {
      messageResult = "Please enter data first";
    } else if (arrayCount > 3) {
      messageResult = "Too much!";
    } else {
      messageResult = "Enjoy!";
    }
    $scope.message = messageResult;
  };

  function getArrayLength (stringToSplit, separator) {
    var arrayLength = 0;
    if (stringToSplit.length) {
      arrayLength = stringToSplit.split(separator).length;
    }
    return arrayLength;
  }
}

})();
