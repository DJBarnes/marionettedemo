DemoApp.module('InventorySection', function (InventorySection, App, Backbone, Marionette, $, _) {
  InventorySection.ItemDetailsItemView = Backbone.Marionette.ItemView.extend({

    initalize : function(options) {
      this.template = _.template(tpl.get('itemDetails'));
    },

    id: 'itemDetails',
    className: 'itemDetails',

    events: {
      'click #save' : 'saveData'
    },

    saveData : function() {
      this.model.set({
        'name':$('#nameTextbox').val(),
        'quantity':$('#quantityTextbox').val(),
        'description':$('#descriptionTextarea').val()
      });
      console.log(this.model);
      this.model.save();
      App.navigate("",true);
    }

  });
});