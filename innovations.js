
        $(document).ready(function(){
      // $(".contact_page").click(function(){
        
       //})


         // alert()
          $.post("modules/body/process.php",{

         },function(data){
            //alert(data)
        $("#innovations_b").html(data)
           })
$("#nmkinnovation").click(function(){
             $(".home_parents").hide();
            $("#login_holder").show()
            //alert("under construction");
            $(".side_menu").css("min-height","0px").removeClass("slideInLeft").addClass("animated slideOutLeft");
            $(".side_menu").addClass("mobile_hidden");
});

 
  })