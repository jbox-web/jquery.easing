# jQuery Easing Plugin

[![GitHub license](https://img.shields.io/github/license/jbox-web/jquery.easing.svg)](https://github.com/jbox-web/jquery.easing/blob/master/LICENSE)
[![Build Status](https://github.com/jbox-web/jquery.easing/workflows/Github%20CI/badge.svg?branch=master)](https://github.com/jbox-web/jquery.easing/actions)

What is it? A jQuery plugin from GSGD to give advanced easing options. More info [here](http://gsgd.co.uk/sandbox/jquery/easing)

For CDN please use CloudFlare [`https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js`](https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js) to help my host. Thank you.

# AMD or CommonJS usage

```js
// CommonJS
var jQuery = require('jquery');
require('jquery.easing')(jQuery);

// AMD
define(['jquery', 'jquery.easing'], function (jQuery, easing) {
  easing(jQuery)
})
```

# Building and testing

* Clone the repo
* `npm install`
* Make changes
* Test against files in `/examples`
* Build minified version with `npm run build`
