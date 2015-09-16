<?php

namespace App\Twig;

use Twig_Extension;
use Twig_SimpleFunction;
use Twig_SimpleFilter;
use Illuminate\Support\Str;
use Twig;
use Illuminate\Foundation\Application as Application;
use App;

/**
 * Creates component() function
 */
class ComponentFunction extends Twig_Extension {
    
    protected $app;

    public function __construct(Application $app) {
      $this->app = $app;
    }

    public function getName() {
        return 'App_Twig_ComponentFunction';
    }

    public function getFunctions() {
        return [
            new Twig_SimpleFunction(
                'component',
                function ($name, $data = []) {
                    return Twig::render($name, $data);
                },
                ['is_safe' => array('html')]
            ),
        ];
    }
}