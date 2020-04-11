(function($, window) {
  // $(function() {
  //   $('#login').on('click', function(e) {
  //     // eはイベント発生時の情報を持つオブジェクト。コールバック関数を呼び出す事ができる。
  //     var email = $('#email').val(),
  //         password = $('#password').val();
  //     // alert(email);
  //     // alert(password);
  //     if (email == '') {
  //       alert('メールアドレスを入力してください');
  //     } else if (email.indexOf('@') < 0) {
  //       alert('メールアドレスには必ず「@」が必要です');
  //     }
  //     if (password == '') {
  //       alert('パスワードを入力してください');
  //     } else if (password.length < 6) {
  //       alert('パスワードは6文字以上です');
  //     }
  //   });
  // });

// jquery03 課題2
  function emailCheck() {
    var email = $('#email').val()
    if (email == '') {
        alert('メールアドレスを入力してください');
      } else if (email.indexOf('@') < 0) {
        alert('メールアドレスには必ず「@」が必要です');
      }
  }
  
  function passwordCheck() {
    var password = $('#password').val()
    if (password == '') {
        alert('パスワードを入力してください');
      } else if (password.length < 6) {
        alert('パスワードは6文字以上です');
      }
  }
 
  $('#login').click(function(){
    emailCheck(email);
    passwordCheck(password);
  });
    
})(jQuery, window);