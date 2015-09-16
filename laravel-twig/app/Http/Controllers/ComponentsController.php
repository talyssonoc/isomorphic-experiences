<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use View;

class ComponentsController extends Controller {
    public function component($component) {
        return View::make('component_source', [ 'componentName' => $component ]);
    }
}
