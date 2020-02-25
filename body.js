
	$(document).ready(function(){
		$(".cont_div").click(function(){
		  $(".home_parents").hide();
            $("#login_holder").show()
            //alert("under construction");
            $(".side_menu").css("min-height","0px").removeClass("slideInLeft").addClass("animated slideOutLeft");
            $(".side_menu").addClass("mobile_hidden");
});
$.post("modules/body/slider.php",{
},function(data){
$("#slider").html(data)

$.post("modules/body/content.php",{
},function(data){
$("#continous_div").html(data)

})
})




	})