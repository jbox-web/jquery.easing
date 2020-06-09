###
# jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
# Open source under the BSD License.
# Copyright © 2008 George McGinley Smith
# All rights reserved.
# https://raw.github.com/gdsmith/jquery.easing/master/LICENSE
###

((factory) ->
  'use strict'
  if typeof define == 'function' and define.amd
    # AMD
    define [ 'jquery' ], ($) ->
      factory $

  else if typeof module == 'object' and typeof module.exports == 'object'
    # CommonJS
    module.exports = (jQuery) ->
      if jQuery == undefined
        jQuery = require('jquery')
      factory jQuery
      return

  else
    factory jQuery
  return
) ($) ->

  'use strict'

  # x is the fraction of animation progress, in the range 0..1
  bounceOut = (x) ->
    n1 = 7.5625
    d1 = 2.75
    if x < 1 / d1
      n1 * x * x
    else if x < 2 / d1
      n1 * (x -= 1.5 / d1) * x + 0.75
    else if x < 2.5 / d1
      n1 * (x -= 2.25 / d1) * x + 0.9375
    else
      n1 * (x -= 2.625 / d1) * x + 0.984375

  # Preserve the original jQuery "swing" easing as "jswing"
  if typeof $.easing != 'undefined'
    $.easing['jswing'] = $.easing['swing']

  pow = Math.pow
  sqrt = Math.sqrt
  sin = Math.sin
  cos = Math.cos
  PI = Math.PI
  c1 = 1.70158
  c2 = c1 * 1.525
  c3 = c1 + 1
  c4 = 2 * PI / 3
  c5 = 2 * PI / 4.5

  $.extend $.easing,
    def: 'easeOutQuad'
    swing: (x) ->
      $.easing[$.easing.def] x
    easeInQuad: (x) ->
      x * x
    easeOutQuad: (x) ->
      1 - ((1 - x) * (1 - x))
    easeInOutQuad: (x) ->
      if x < 0.5 then 2 * x * x else 1 - (pow(-2 * x + 2, 2) / 2)
    easeInCubic: (x) ->
      x * x * x
    easeOutCubic: (x) ->
      1 - pow(1 - x, 3)
    easeInOutCubic: (x) ->
      if x < 0.5 then 4 * x * x * x else 1 - (pow(-2 * x + 2, 3) / 2)
    easeInQuart: (x) ->
      x * x * x * x
    easeOutQuart: (x) ->
      1 - pow(1 - x, 4)
    easeInOutQuart: (x) ->
      if x < 0.5 then 8 * x * x * x * x else 1 - (pow(-2 * x + 2, 4) / 2)
    easeInQuint: (x) ->
      x * x * x * x * x
    easeOutQuint: (x) ->
      1 - pow(1 - x, 5)
    easeInOutQuint: (x) ->
      if x < 0.5 then 16 * x * x * x * x * x else 1 - (pow(-2 * x + 2, 5) / 2)
    easeInSine: (x) ->
      1 - cos(x * PI / 2)
    easeOutSine: (x) ->
      sin x * PI / 2
    easeInOutSine: (x) ->
      -(cos(PI * x) - 1) / 2
    easeInExpo: (x) ->
      if x == 0 then 0 else pow(2, 10 * x - 10)
    easeOutExpo: (x) ->
      if x == 1 then 1 else 1 - pow(2, -10 * x)
    easeInOutExpo: (x) ->
      if x == 0 then 0 else if x == 1 then 1 else if x < 0.5 then pow(2, 20 * x - 10) / 2 else (2 - pow(2, -20 * x + 10)) / 2
    easeInCirc: (x) ->
      1 - sqrt(1 - pow(x, 2))
    easeOutCirc: (x) ->
      sqrt 1 - pow(x - 1, 2)
    easeInOutCirc: (x) ->
      if x < 0.5 then (1 - sqrt(1 - pow(2 * x, 2))) / 2 else (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
    easeInElastic: (x) ->
      if x == 0 then 0 else if x == 1 then 1 else -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
    easeOutElastic: (x) ->
      if x == 0 then 0 else if x == 1 then 1 else pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1
    easeInOutElastic: (x) ->
      if x == 0 then 0 else if x == 1 then 1 else if x < 0.5 then -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 else pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
    easeInBack: (x) ->
      c3 * x * x * x - (c1 * x * x)
    easeOutBack: (x) ->
      1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
    easeInOutBack: (x) ->
      if x < 0.5 then pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 else (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
    easeInBounce: (x) ->
      1 - bounceOut(1 - x)
    easeOutBounce: bounceOut
    easeInOutBounce: (x) ->
      if x < 0.5 then (1 - bounceOut(1 - (2 * x))) / 2 else (1 + bounceOut(2 * x - 1)) / 2
  return
