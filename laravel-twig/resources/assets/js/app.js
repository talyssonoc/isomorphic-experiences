define([
  'jquery',
  'component',
  'text!components/my_component',
  'text!components/list_product',
],
function($, component, myComponent, listProduct) {
  $('[data-client]').append(
    component(myComponent, {renderSource: 'client'})
  );

  $('[data-product-list]').append(
    component(listProduct, {
      products: [
        {name: 'Camiseta'},
        {name: 'Boné'},
        {name: 'Tênis'}
      ]
    })
  );
});
