DemoApp.module('InventorySection', function (InventorySection, App, Backbone, Marionette, $, _) {

  InventorySection.InventoryController = {

    getItems : function(callback) {
      if (typeof InventorySection.currentInventory === "undefined") {
        InventorySection.currentInventory = new DemoApp.InventorySection.ItemCollection();
        InventorySection.currentInventory.fetch({success : callback});
      } else {
        callback();
      }
    },

    showItemTable : function() {
      var contentDiv = new InventorySection.ItemListCompositeView({collection : InventorySection.currentInventory});
      console.log(contentDiv);
      App.contentArea.show(contentDiv);
    }

  };
});