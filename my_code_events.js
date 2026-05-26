$(document).ready(function(){
//anonymous function
   $("div").click(function(){
      $(this).css("color","purple");    
   
   });
   $("div").mousedown(function(){
      $(this).css("background-color","blue");    
   
   });

   $("div").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });

 $("div").mouseenter(function(){
      $(this).css("color","orange");    
   
   });

   $("div").mouseleave(function(){
      $(this).css("color","pink");
          
   
   });

 $("#stop").click(function(){   
      $("*").unbind("mouseleave");    
   
   });




});
