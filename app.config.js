'use strict';

angular.module("myApp").config(function($routeProvider){
  $routeProvider
  .when("/skill",{
    templateUrl:'skill/skill.template.html'
  })
  .otherwise("/");
});