$(document).ready(function(){
//alert()
		$(".home_links").click(function(){
			var directions=$(this).attr("role")
			 $(".home_parents").hide();
            $("#"+directions+"_holder").show();
			//alert("under construction");
			$(".side_menu").css("min-height","0px").removeClass("slideInLeft").addClass("animated slideOutLeft");
			$(".side_menu").addClass("mobile_hidden");

        
			
		})

$("#open_menu").click(function(){
	$(".side_menu").css("min-height","100px").removeClass("mobile_hidden").removeClass("slideOutLeft").addClass("animated slideInLeft");
 
 

})

})

