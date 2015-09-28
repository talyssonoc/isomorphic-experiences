define([
  'jquery',
  'twig',
  'text!components/my_component',
  'text!components/list_product',
  'text!components/product',
],
function(
  $,
  Twig,
  myComponent,
  listProduct,
  product
) {

  var components = {
    myComponent: myComponent,
    listProduct: listProduct,
    product: product
  };

  Twig.extendFunction('component', function(name, data) {
    return Twig.twig({data: components[name]}).render(data);
  });

  var component = function(component, data) {
    return Twig.twig({data: component}).render(data);
  };

  return component;
});
