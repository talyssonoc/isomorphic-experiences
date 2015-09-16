define([
  'jquery',
  'twig',
  'text!components/my_component'
],
function($, Twig, templateSource) {
  var template = Twig.twig({
    data: templateSource
  });

  var markup = template.render({
    renderSource: 'client'
  });

  $('[data-server]').append(markup);
});