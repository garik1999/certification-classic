export const resize = () => {
  let windowSize = 0;
  function checkWidth() {
    windowSize = $(window).width();
    if(windowSize < 760) {
      $('#filter').slideUp();
    } else {
      $('#filter').slideDown();
    }
  }

  checkWidth()
  $(window).resize(checkWidth);

  $('#menu_sidebar_toggle').on('click', function(){
    if(windowSize < 760) {
      $('#filter').slideToggle();
    }
  });
};
