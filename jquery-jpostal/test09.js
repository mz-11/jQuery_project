// 課題5,6

(function($, window) {
  // $(window).ready( function() { });この書き方もあるみたい。何が違う？
  $(function() {
    $('#postcode1').jpostal({
    click : '#btn_postcode',
    postcode : [
      '#postcode1', //郵便番号 前3桁
      '#postcode2' //郵便番号 後4桁
      // '#postcode1', //郵便番号 前3桁
    ],
    address : {
      '#address'  : '%3%4%5' //都道府県 住所1 住所2
    }
    });
    
  });
   
    

})(jQuery, window);