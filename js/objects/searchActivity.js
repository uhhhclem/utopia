goog.require('utopia.constants');

goog.provide('utopia.objects.searchActivity');

utopia.objects.searchActivity.SearchActivity = function(key) {
    this.regionData = utopia.constants.regions[key];
};