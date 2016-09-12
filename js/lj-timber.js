(function ($) {
  'use strict';
  $(document).ready(function () {
    $(function() {
      var endDate = "September 30, 2016 00:00:00";
      $('.lj-cd').countdown({
        date: endDate,
        render: function(data) {
          $(this.el).html(parseInt(this.leadingZeros(data.years, 2) * 365) + parseInt(this.leadingZeros(data.days, 2)) + ' days');
        }
      });
    });
    new WOW().init();
  });
  $(window).load(function () {
    $('.lj-preloader').delay(100).fadeOut(500);
  });
})(jQuery);
