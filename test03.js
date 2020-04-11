(function($, window) {
  $(function() {
    // ここに処理を書きます
    // $('#click_me').on('click', function() {
    $('body').on('click', function() {
      // onを使わずに表示したほうがシンプル？
     $('#click_me').css({'color': 'red'});
    });
  });
})(jQuery, window);