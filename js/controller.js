var myApp = angular.module('myApp',[]);

myApp.controller('vowelController',function($scope,$log){
    $log.log('controller called!');
    $scope.checkVowel = function(){
        $log.log('checkVowel called!');
        var regexSet = $scope.inputText.toLowerCase().match(/[aeiou]/g);
        if(regexSet){
            regexSet.sort();
            var str = regexSet.toString().replace(/,/g,"");
        }
        $scope.vowels = str?str:"";
    };
});