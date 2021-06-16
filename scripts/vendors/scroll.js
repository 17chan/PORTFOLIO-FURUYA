$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 600; // ミリ秒で記述
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top-80;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  //別ページからのリンク
  var urlHash = location.hash;
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
      // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
      var headerHight = 80;
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $('body,html').stop().animate({scrollTop:position}, 600, 'swing');
    }, 100);
  }
});
