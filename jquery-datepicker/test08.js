(function($, window) {
  $(function() {
    // ここに処理を書きます
    // $('#date_picker').flatpickr();
    // $("#date_picker").flatpickr;
    
    
    // 課題4
    $('#flatpickr').flatpickr({
      buttonImage: "calender02.jpg", // カレンダーアイコン
      buttonText: "カレンダーアイコン", // カレンダーアイコンが表示されなかったときのテキスト
      buttonImageOnly: true, // ボタン画像に指定された画像だけを表示する
      showOn: "button"
    });
      // flatpickerはjQueryを使わない環境で使用する機能らしい。TB教材に問題ありとのこと。
      //実際に使いたいときは調べやすいdatepickerを使ってやってみる！
      
      // $('#dp').datepicker({
      //   buttonImage: "calender02.jpg",
      //   buttonImageOnly: true,  // ボタン画像に指定された画像だけを表示する
      //   showOn: "both"
      // }); 
      
  });
 
    

})(jQuery, window);


      // $('#dataText').text(取得した日付);
      
      // onSelect: function (dataText, inst) {
      //   $('#dataText').val(   );