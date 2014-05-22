DemoApp.module('InventorySection', function (InventorySection, App, Backbone, Marionette, $, _) {

  InventorySection.ItemListItemView = Backbone.Marionette.ItemView.extend({

    tagName: 'tr',

    initialize : function() {
      this.template = _.template(tpl.get('itemListItem'));
      this.model.bind('change', this.render, this);
    },

    id: 'items',

    attributes : function(){
      var classValue = InventorySection.currentInventory.indexOf(this.model);
      var classProperty = '';
      if ((Number(classValue)%2) === 0) {
        classProperty = 'even';
      } else {
        classProperty = 'odd';
      }
      return {
        id : this.model.get('id'),
        class : classProperty + ' itemRow'
      };
    },

    events : {
      'click' : 'showItemDetails'
    },
    
    showItemDetails : function() {
      App.navigate('items/' + this.model.id, true);
    }

  });

  InventorySection.ItemListCompositeView = Backbone.Marionette.CompositeView.extend({

    itemView: InventorySection.ItemListItemView,

    initialize : function() {
      this.template = _.template(tpl.get('itemTable'));
      console.log(this.template);
    },

    id: 'itemTable',
    className: 'itemTable',

    itemViewContainer : "tbody"

  });
});
/*
window.ItemListView = Backbone.View.extend({
  tagName : 'table',
  className: 'itemTable',
  initialize: function() {
    
  },
  render : function() {
    $(this.el).empty();
    
    $(this.el).append('<tr><td class="name">Item Name</td><td class="quantity">Quantity</td><td class="description">Description</td></tr>')
    
    _.each(this.model.models, function(item) {
      $(this.el).append(new ItemListItemView({
        model : item,
      }).render());
    }, this);
    //$('#content').html(this.el);
    return this.el;
  }
});

window.ItemListItemView = Backbone.View.extend({
  tagName : 'tr',
  className: 'items',
  
  initialize: function(){
    this.model.bind("change", this.render, this);
    
    this.template = _.template(tpl.get('itemListItem'));
    
    $(this.el).attr('id',('itemrow' + this.model.id));
  },
  
  render : function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this.el;
  },
  
  events : {
    'click' : 'showItemDetails'
  },
  
  showItemDetails : function() {
    app.navigate('items/' + this.model.id, true);
  }
});
*/