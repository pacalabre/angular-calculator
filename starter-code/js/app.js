var app = angular.module("calcApp", []);
app.controller("calcCtrl", ['$scope', function($scope) {
var toggle = 0;
var operator;
var a = '';
var b = '';

  $scope.number = '0';


  // Button Assignments
  $scope.numOne = function() {
     $scope.number = $scope.number +'1';
    if(toggle === 0){
      a = $scope.number;
      console.log("a = "+ a);
      console.log("b = "+ b);
    } else if (toggle === 1) {
      $scope.number = '0';
      b = $scope.number + '1';
      console.log("a = "+ a);
      console.log("b = "+ b);
    }
  };

  $scope.numTwo = function() {
   $scope.number = $scope.number +'2';
  };

  $scope.numThree = function() {
   $scope.number = $scope.number +'3';
  };

  $scope.numFour = function() {
   $scope.number = $scope.number +'4';
  };

  $scope.numFive = function() {
   $scope.number = $scope.number +'5';
  };

  $scope.numSix = function() {
   $scope.number = $scope.number +'6';
  };

  $scope.numSeven = function() {
   $scope.number = $scope.number +'7';
  };

  $scope.numEight = function() {
   $scope.number = $scope.number +'8';
  };

  $scope.numNine = function() {
   $scope.number = $scope.number +'9';
  };

  $scope.clear = function() {
   $scope.number = '0';
  };


  //operators

  $scope.add = function(a,b) {
    operator = 1;
    toggle += 1;
    console.log(toggle);
  };

  $scope.subtract = function(a,b) {
    operator = 2;
    toggle += 1;
    console.log(toggle);
  };

  $scope.multiply = function(a,b) {
    operator = 1;
    toggle += 1;
    console.log(toggle);
  };

  $scope.divide = function(a,b) {
    operator = 4;
    toggle += 1;
    console.log(toggle);
  };



  $scope.equals = function() {
    if (operator === 1) {
      $scope.number = parseInt(a) + parseInt(b);
    } else if (operator === 2) {
      $scope.number = parseInt(a) - parseInt(b);
    } else if (operator === 3) {
      $scope.number = parseInt(a) * parseInt(b);
    } else if (operator === 4) {
      $scope.number = parseInt(a) / parseInt(b);
    }
  }

}]);


