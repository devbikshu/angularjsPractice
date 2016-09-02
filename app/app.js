angular.module('testApp', ["directivesExample", "promiseExamples", "cart", "product"])
.config(function(){
    console.log("Calling from app js");
});