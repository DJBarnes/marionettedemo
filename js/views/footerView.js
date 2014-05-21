DemoApp.module('InventorySection', function (InventorySection, App, Backbone, Marionette, $, _) {
  InventorySection.FooterView = Backbone.Marionette.ItemView.extend({
    initialize : function(options) {
      this.template = _.template(tpl.get('pageFooter'));
    },

    events : {
      'click .github' : 'navigateToGithub',
      'click .backbone' : 'navigateToBackbone'
    },

    navigateToGithub : function() {
      window.location = 'https://github.com/DJBarnes/';
    },

    navigateToBackbone : function() {
      window.location = 'http://backbonejs.org';
    }
  });
});