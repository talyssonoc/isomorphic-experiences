requirejs.config({
  baseUrl: '/js',
  paths: {
    components: '/component',
    requireLib: '../vendor/requirejs/require',
    jquery: '../vendor/jquery/dist/jquery',
    text: '../vendor/requirejs-text/text',
    twig: '../vendor/twig.js/twig.min'
  }
});

require(['app']);
