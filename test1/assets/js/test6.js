$(function(){

   $("body").append("<div class='container'></div>");
   var $container = $(".container");

   var xLine = 5;
   var yLine = 5;
   var scale = 100;

   for(var i=0; i<yLine; i++){
     for(var n=0; n<xLine; n++){

       $container.append("<div class='box box"+i+"_"+n+"'></div");
       var $box =$(".box"+i+"_"+n)
       $box.css({
         "width": scale,
         "height": scale,
         "top": i * scale,
         "left": n * scale,
         "background-color":"#ccc",
         "position": "absolute",
         "border": "solid 1px #000",
        });
     }
   }


})
