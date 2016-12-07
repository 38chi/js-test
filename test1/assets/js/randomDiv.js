$(function(){

  var vieArea = 500;
  for(var i=1; i<=10; i++){
    box = $(".box"+i);
    box.css({"top":Math.random()*vieArea,"left":Math.random()*vieArea});
  }
})
