$(document).ready(function(){

  $('.ui.accordion').accordion();

  $('.trigger.example .accordion')
    .accordion({
      selector: {
        trigger: '.title .icon'
      }
    })
  ;

  /* Show top fixed menu outside hero page */
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  /* Navigation scroll */
  $(function() {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
          }
        }
      });
  });

  /* For Resume section */
  $('.ui.tabular.menu a.item')
      .on('click', function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active');

        var tab_id = $(this).attr('data-tab');
        $("#"+tab_id)
          .addClass('active')
          .siblings()
          .removeClass('active');
      });

  /* i18n */
   $("#i18n-menu").change(function () {
      const langCode = this.value;
      const path = 'resources/i18n/'+langCode+'.json';
      console.log("langCode=", langCode, " ,path=", path);
      $.getJSON(path, translate);
  });


});
