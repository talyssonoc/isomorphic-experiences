define([
  'jquery',
  'component'
],
function($, component, myComponent, listProduct) {
  $('[data-client]').append(
    component('myComponent', {renderSource: 'client'})
  );

  $('[data-product-list]').append(
    component('listProduct', {
      products: [
        {name: 'Camiseta'},
        {name: 'Boné'},
        {name: 'Tênis'}
      ]
    })
  );
});
