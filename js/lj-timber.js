(function ($) {
    'use strict';
    $(document).ready(function () {
        $('#subscribe').ajaxChimp({
            language: 'en',
            url: 'http://simplybusiness.us11.list-manage.com/subscribe/post?u=d357a6374d2c6bfdc700ff8a1&amp;id=7eb1a83c6d'
        });
        $.ajaxChimp.translations.en = {
            "\x73\x75\x62\x6D\x69\x74": 'Submitting...',
            0: '<i class="icon ion-android-done"></i> We will be in touch soon!',
            1: '<i class="icon ion-android-warning"></i> You must enter a valid e-mail address.',
            2: '<i class="icon ion-android-warning"></i> E-mail address is not valid.',
            3: '<i class="icon ion-android-warning"></i> E-mail address is not valid.',
            4: '<i class="icon ion-android-warning"></i> E-mail address is not valid.',
            5: '<i class="icon ion-android-warning"></i> E-mail address is not valid.'
        };
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
