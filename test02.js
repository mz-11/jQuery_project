(function($, window) {
// 引数の$,windowについて

  $(function() {
    
    // 課題1
    $('h2').remove();
    
    // 課題2
    var text = $('#index').text();
    alert(text);
    
    var html = $('#index').html();
    alert(html);
    
    // 課題3
    $('ul#index').append('<li>メソッド</li>');
    
    // 課題4
    $('ul#index').find('li').each(function() {
      var leng = $(this).text().length;
      alert(leng);
    });
    
    // 課題4
    $('ul#index').find('li').each(function() {
      var leng = $(this).text().length;
      var t = $(this).text() + ' [' + leng + '文字]';
      alert(t);
    });
    
  });
})(jQuery, window);
// エラー：jQueryの定義について？