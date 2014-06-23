//##############################################################################
// jQuery
//##############################################################################

//##############################################################################
// jQuery and Events
//##############################################################################

$('#click-target').on('click', function(e) {
  // This is the DOM element that was clicked
  var $target = $(e.target);
});

$('.letter-b').on('hover',
  function(e) {
    var $target = $(e.target);
    $target.css('font-size', '36px');
    console.log('hover in');
  },
  function(e) {
    var $target = $(e.target);
    $target.css('font-size', '34px');
    console.log('hover out');
  }
);

//##############################################################################
// jQueryUI
//##############################################################################
