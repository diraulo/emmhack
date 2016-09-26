//= require jquery.min
//= require bootstrap.min
//= require material.min
//= require material-kit

function smoothScroll(target) {
  $('body,html').animate({
    'scrollTop': target.offset().top
  },
  900);
}

function goto(target) {
  event.preventDefault();
  smoothScroll($(target));
}

$('#contact-link').on('click', function() {
  goto(this.hash);
});
