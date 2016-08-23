$(document).ready(function (){
  'use strict';

// INSERT SWITCHER INTO BODY
  var $code = '<div class="panel">\
    <div class="panel-options">\
      <p class="switchp">Switch versions</p>\
      <a class="version icon ion-toggle" href="#"></a>\
      <p>Choose color scheme</p>\
      <ul class="color-picker clearfix">\
        <li><a class="color-1 selected-color" href="#"><span class="c11"></span><span class="c12"></span><span class="c13"></span></a></li>\
      </ul>\
      <ul class="color-picker clearfix">\
        <li><a class="color-2" href="#"><span class="c21"></span><span class="c22"></span><span class="c23"></span></a></li>\
      </ul>\
      <ul class="color-picker clearfix">\
        <li><a class="color-3" href="#"><span class="c31"></span><span class="c32"></span><span class="c33"></span></a></li>\
      </ul>\
      <ul class="color-picker color-picker-last clearfix">\
        <li><a class="color-4" href="#"><span class="c41"></span><span class="c42"></span><span class="c43"></span></a></li>\
      </ul>\
      <p>Menu opacity</p>\
      <div id="slider" data-wjs-element="menu"></div>\
      <p>Check other demos</p>\
      <ul class="demo-list fa-ul">\
        <li><i class="icon ion-ios-arrow-forward"></i><a href="../demo-1/index.html">Animated gradient</a></li>\
        <li><i class="icon ion-ios-arrow-forward"></i><a href="../demo-2/index.html">Single image</a></li>\
        <li><i class="icon ion-ios-arrow-forward"></i><a href="../demo-3/index.html">YouTube video</a></li>\
        <li><i class="icon ion-ios-arrow-forward"></i><a href="../demo-4/index.html">Image slideshow</a></li>\
      </ul>\
    </div>\
    <div class="panel-toggle left">\
      <i class="icon ion-ios-settings-strong"></i>\
    </div>\
  </div>';
  
  $('header').before($code);

// CALCULATE COLOR IN HEXADECIMAL
  function hexc(colorval) {
    var color = '';

    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return color = '#' + parts.join('');
  }

// CHANGE COLOR OF TEMPLATE ELEMENTS
  function toggleColor(colorHEX){
    $('style').remove();

    var style = '<style>\
      .lj-overlay-gradient-animation {\
        background: linear-gradient(226deg, ' + colorHEX[2] + ', ' + colorHEX[1] + ', ' + colorHEX[0] + ');\
        background-size: 600% 600%;\
      }\
      .lj-contact-one span {\
        color: ' + colorHEX[0] + ';\
      }\
      .lj-contact-two span {\
        color: ' + colorHEX[1] + ';\
      }\
      .lj-contact-three span {\
        color: ' + colorHEX[2] + ';\
      }\
    </style>';
    
    $('head').append(style);
  }

// VERSION SWITCHER
  var version = $('.version');
  version.html('');

  if( version.hasClass('ion-toggle-filled') ) {
    version.html('dark version');
  }
  else if( version.hasClass('ion-toggle') ) {
    version.html('light version');
  }

  version.click(function(event){
    event.preventDefault();    
    var contactSection = $('.contact');
    if( $(this).hasClass('ion-toggle-filled') ) {
      $(this).removeClass('ion-toggle-filled').addClass('ion-toggle');
      $(this).html('light version');
      contactSection.css('background-color','#fff');
      contactSection.find('h4').css('color','#1c1c1c');
    }
    else if( $(this).hasClass('ion-toggle') ) {
      $(this).removeClass('ion-toggle').addClass('ion-toggle-filled');
      $(this).html('dark version');
      contactSection.css('background-color','#1c1c1c');
      contactSection.find('h4').css('color','#fff');
    }
  });

// CHANGING COLOR SCHEME
  $('.color-picker a').click(function(event){
    event.preventDefault();
    $('.color-picker a').removeClass('selected-color');
    $(this).addClass('selected-color');
    var selectedColor = [];
    $(this).each(function() {
      $(this).find('span').each(function() {
        selectedColor.push(hexc($(this).css('background-color')));
      });      
    });
    toggleColor(selectedColor);
  });

// SLIDER
  $('#slider').slider({ min: 0, max: 1.01, step: 0.01, value: 0.25,
    slide: function() {
      //get the value of the slider with this call
      var o = $(this).slider('value');
      //here I am just specifying the element to change with a "made up" attribute (but don't worry, this is in the HTML specs and supported by all browsers).
      var e = '.' + $(this).attr('data-wjs-element');
      
      $(e).css('background-color', 'rgba(255,255,255,' + o + ')');
      
      // hiding/showing border in menu
      if(o <= '0.1') {
        $('.menu').css('border-bottom','0');
      }
      else {
        $('.menu').css('border-bottom','1px solid #fff');
      }

      // changing logo and colors in menu
      var logo = $('.lj-logo img');
      var socialA = $('.lj-socials ul li a');

      if(o >= '0.6') {
        logo.attr('src','img/logo-dark.png');
        socialA.css('color','#1c1c1c');
        socialA.hover(function(e) { 
            $(this).css('border',e.type === 'mouseenter'?'2px solid rgba(28,28,28,0.5)':'2px solid transparent');
        })
      }
      else {
        logo.attr('src','img/logo.png');
        socialA.css('color','#fff');
        socialA.hover(function(e) { 
            $(this).css('border',e.type === 'mouseenter'?'2px solid rgba(255,255,255,0.5)':'2px solid transparent');
        })
      }

    }
  });

// PANEL TOGGLE
  $('.panel-toggle').click(function(){
    var $panel = $('.panel');
    var left = -230;
    if( parseInt($panel.css('left')) == left)
      $panel.animate({left: '0px'}, 250);
    else if( parseInt($panel.css('left')) == 0)
      $panel.animate({left: '-230'}, 250);
  });

// TOGGLE MODULES
  $(".select-module").click(function(event) {
    event.preventDefault();

    // toggle pestka on/off
    $(this).toggleClass('module-on module-off');

    // hide/show module
    var module = $(this).attr('href');
    $('.' + module).toggleClass('module module-hidden');

  });

});