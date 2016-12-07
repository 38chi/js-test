/*js file*/
$(function(){

  //変数宣言

  var xLine;
  var yLine;
  var items;
  var boxArr;
  var scale;

  function init(){
    $("body").append("<div class='container'></div>");
    $container = $(".container");
    scale = 100;
    xLine = Math.round($(window).width()/100);
    yLine = Math.round($(window).height()/100);
    items = xLine * yLine;
  }

  //boxを生成
  function createElements(){
    //配列を作成
    boxArr = [];
    for(var i = 0; i < yLine; i++){
      for(var n = 0; n < xLine; n++){
        $container.append("<div class='box box"+i+"_"+n+"'></div");
        var boxName = ".box"+i+"_"+n;
        var $box =$(boxName);
        $box.text(boxName);

        $box.css({
          "width": 100,
          "height": 100,
          "top": i * 100,
          "left": n * 100,
          "background-color":"#ccc",
          "position": "absolute",
          "border": "solid 1px #fefefe",
          "text-align": "center",
          "font-size": "12px",
          "line-height": 100+"px",
          "opacity":0
         });

        boxArr.push(boxName);
      }
    }
  }

  //↓連想配列ｘ多次元配列を確認する
  //console.log(boxArr);
  var rArr = [];
  function createRandom(){
    //ランダムの値を入れる配列を用意
    var num = boxArr.length;
    for(var i = 0; i < num; i++){
      var rNum = Math.floor( Math.random() * boxArr.length );
      var fNum = boxArr.splice( rNum,1 );
      rArr.push( fNum );
    }
  }

  function viewElements(){
    var num = rArr.length;
    var count = 0;
    for(var i=0; i < yLine; i++){
      for(var n=0; n < xLine; n++){
        var name = rArr[count];
        var $box =$( String(name) );
        $box.stop().delay( count*10 ).animate({
          "top": i * 100,
          "left": n * 100,
          "opacity":1
        },650);

         count++;
      }

    }
  }

  init();
  createElements();
  createRandom();
  viewElements();

})//end function
