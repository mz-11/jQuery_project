(function($, window) {
// 引数の$,windowについて...window:予め用意されているオブジェクトのこと


  $(function() {
    
    // 課題1
    $('h2').remove();
    
    // 課題2
    var text = $('#index').text();
    alert(text);
    
    
    var html = $('#index').html();
    alert(html);
    
    // text(),html()の違い
    // textはタグの中身の文字列を取得、htmlはタグも含めて取得。
    
    
    // 課題3
    $('ul#index').append('<li>メソッド</li>');
    
    // 課題4
    $('ul#index').find('li').each(function() {
      var leng = $(this).text().length;
      alert(leng);
    });
    
    // 課題5
    $('ul#index').find('li').each(function() {
      var leng = $(this).text().length;
      
      // alertではなく各文字列の最後に追加
      // var t = $(this).text() + ' [' + leng + '文字]';
      $(this).append(' [' + leng + '文字]');
      // alert(t);
    });
    
  });
})(jQuery, window);
// エラー：jQueryの定義について？