DemoApp.module('InventorySection', function (InventorySection, App, Backbone, Marionette, $, _) {
  InventorySection.ItemModel = Backbone.Model.extend({
    defaults : {
      'id' : null,
      'name' : '',
      'quantity' : '0',
      'description' : ''
    },

    urlRoot : 'api/items/',

    initialize : function() {
      this.on("error", function(model, error) {
        alert(error);
      });
    }
  });

  InventorySection.ItemCollection = Backbone.Collection.extend({
    model : InventorySection.ItemModel,
    url : 'api/items/'
  });
});
