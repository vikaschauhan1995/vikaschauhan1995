'use strict';

angular.module("myApp").config(function($routeProvider){
  $routeProvider
  .when("/skill",{
    templateUrl:'skill/skill.template.html'
  })
  .when("/work",{
  	templateUrl:'work/work.template.html'
  })
  .when("/contact",{
  	templateUrl:"contact/contact.template.html"
  })
  .otherwise("/");
});