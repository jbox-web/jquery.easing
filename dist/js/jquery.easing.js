/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery.easing/master/LICENSE
 */

(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], function($) {
      return factory($);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = function(jQuery) {
      if (jQuery === void 0) {
        jQuery = require('jquery');
      }
      factory(jQuery);
    };
  } else {
    factory(jQuery);
  }
})(function($) {
  'use strict';
  var PI, bounceOut, c1, c2, c3, c4, c5, cos, pow, sin, sqrt;
  // x is the fraction of animation progress, in the range 0..1
  bounceOut = function(x) {
    var d1, n1;
    n1 = 7.5625;
    d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  };
  // Preserve the original jQuery "swing" easing as "jswing"
  if (typeof $.easing !== 'undefined') {
    $.easing['jswing'] = $.easing['swing'];
  }
  pow = Math.pow;
  sqrt = Math.sqrt;
  sin = Math.sin;
  cos = Math.cos;
  PI = Math.PI;
  c1 = 1.70158;
  c2 = c1 * 1.525;
  c3 = c1 + 1;
  c4 = 2 * PI / 3;
  c5 = 2 * PI / 4.5;
  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function(x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function(x) {
      return x * x;
    },
    easeOutQuad: function(x) {
      return 1 - ((1 - x) * (1 - x));
    },
    easeInOutQuad: function(x) {
      if (x < 0.5) {
        return 2 * x * x;
      } else {
        return 1 - (pow(-2 * x + 2, 2) / 2);
      }
    },
    easeInCubic: function(x) {
      return x * x * x;
    },
    easeOutCubic: function(x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function(x) {
      if (x < 0.5) {
        return 4 * x * x * x;
      } else {
        return 1 - (pow(-2 * x + 2, 3) / 2);
      }
    },
    easeInQuart: function(x) {
      return x * x * x * x;
    },
    easeOutQuart: function(x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function(x) {
      if (x < 0.5) {
        return 8 * x * x * x * x;
      } else {
        return 1 - (pow(-2 * x + 2, 4) / 2);
      }
    },
    easeInQuint: function(x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function(x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function(x) {
      if (x < 0.5) {
        return 16 * x * x * x * x * x;
      } else {
        return 1 - (pow(-2 * x + 2, 5) / 2);
      }
    },
    easeInSine: function(x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function(x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function(x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function(x) {
      if (x === 0) {
        return 0;
      } else {
        return pow(2, 10 * x - 10);
      }
    },
    easeOutExpo: function(x) {
      if (x === 1) {
        return 1;
      } else {
        return 1 - pow(2, -10 * x);
      }
    },
    easeInOutExpo: function(x) {
      if (x === 0) {
        return 0;
      } else if (x === 1) {
        return 1;
      } else if (x < 0.5) {
        return pow(2, 20 * x - 10) / 2;
      } else {
        return (2 - pow(2, -20 * x + 10)) / 2;
      }
    },
    easeInCirc: function(x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function(x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function(x) {
      if (x < 0.5) {
        return (1 - sqrt(1 - pow(2 * x, 2))) / 2;
      } else {
        return (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
      }
    },
    easeInElastic: function(x) {
      if (x === 0) {
        return 0;
      } else if (x === 1) {
        return 1;
      } else {
        return -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
      }
    },
    easeOutElastic: function(x) {
      if (x === 0) {
        return 0;
      } else if (x === 1) {
        return 1;
      } else {
        return pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
      }
    },
    easeInOutElastic: function(x) {
      if (x === 0) {
        return 0;
      } else if (x === 1) {
        return 1;
      } else if (x < 0.5) {
        return -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2;
      } else {
        return pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
      }
    },
    easeInBack: function(x) {
      return c3 * x * x * x - (c1 * x * x);
    },
    easeOutBack: function(x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function(x) {
      if (x < 0.5) {
        return pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2;
      } else {
        return (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
      }
    },
    easeInBounce: function(x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function(x) {
      if (x < 0.5) {
        return (1 - bounceOut(1 - (2 * x))) / 2;
      } else {
        return (1 + bounceOut(2 * x - 1)) / 2;
      }
    }
  });
});
