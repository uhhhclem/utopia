/* global angular */
/* global goog */

goog.require('utopia.module');

goog.provide('utopia.controllers.testCtrl');

angular.module('utopia').controller('testCtrl', function(){
    this.data = {
        'field1': 'value1',
        'field2': 'value2'
    };
});