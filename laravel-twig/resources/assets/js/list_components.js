define([
  'text!components/my_component',
  'text!components/list_product',
  'text!components/product',
],
function(
  myComponent,
  listProduct,
  product
) {

  return {
    myComponent: myComponent,
    listProduct: listProduct,
    product: product
  };
});
