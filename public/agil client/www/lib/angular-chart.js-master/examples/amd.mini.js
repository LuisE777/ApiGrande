!function(){"use strict";require.config({paths:{angular:"../node_modules/angular/angular.min",chart:"../node_modules/chart.js/dist/Chart","angular-chart":"../angular-chart"},shim:{angular:{exports:"angular"}}}),define(["angular","angular-chart"],function(a){a.module("examples",["chart.js"]).controller("RequireCtrl",["$scope",function(a){a.labels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a.series=["Series A","Series B"],a.data=[[65,59,80,81,56,55,40],[28,48,40,19,86,27,90]]}])})}();