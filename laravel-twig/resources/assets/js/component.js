define([
  'jquery',
  'twig',
  'list_components'
],
function(
  $,
  Twig,
  components
) {

  var component = function(name, data) {
    return Twig.twig({data: components[name]}).render(data);
  };

  Twig.extendFunction('component', component);

  return component;
});
