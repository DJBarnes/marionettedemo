DemoApp.module('InventorySection', function (InventorySection, App, Backbone, Marionette, $, _) {
  InventorySection.HeaderView = Backbone.Marionette.ItemView.extend({
    initialize : function(options) {
      this.template = _.template(tpl.get('pageHeader'));
    },

    events : {
      'click .mainImage' : 'navigateToMain'
    },

    navigateToMain : function() {
      App.navigate('',true);
    }
  });
});