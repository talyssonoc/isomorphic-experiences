# Laravel-Twig Isomorphic Experience

This is a experience with isomorphic templates with Laravel and Twig/Twig.js

## Dependencies

- [PHP](https://secure.php.net/downloads.php)
- [Composer](https://getcomposer.org/download/)
- [npm](https://www.npmjs.com)
- [Bower](http://bower.io/#install-bower)

## Important link(s)

- [Differences between Twig and Twig.js](https://github.com/justjohn/twig.js/wiki/Implementation-Notes)

## Setup

You gotta run:

```sh
  $ composer install
```

Then:

```sh
  $ npm install
```

Then:

```sh
  $ bower install
```

Alternatively you can run them at the same time:

```sh
  $ composer install && npm install && bower install
```

To start developing, open two terminal instances and run each one of these commands:

```sh
  $ php artisan serve
```

And:

```sh
  $ gulp watch
```