$(document).ready(function(){
		//var new_loader=$("#loader").html();
		//$("#body_div").html(new_loader);
$.get("modules/header/header.php",{
},function(data){

$("#nheader_holder").html(data)

$.get("modules/body/body.php",{
},function(data){

$("#home_holder").html(data)
$.get("modules/body/footer.php",{
},function(data){
$("#footer").html(data)
})
//alert(data);
})

})
$.get("modules/body/social_medias.php",{
},function(data){
$("#social_medias").html(data).addClass("slideInLeft");
})
$.get("modules/body/innovations.php",{
},function(data){
$("#innovations_holder").html(data)
})
$.get("modules/body/web/side_menu.php",{
},function(data){
	//alert(data)
$(".side_menu").html(data)
})
$(".home_parents").click(function(){

  $(".side_menu").css("min-height","0px").removeClass("slideInLeft").addClass("animated slideOutLeft");
$(".side_menu").addClass("mobile_hidden");
	
})
$.get("modules/body/login.php",{
},function(data){
$("#login_holder").html(data)
})
$.get("modules/body/web/contact.php",{
},function(data){
$("#contacts_holder").html(data)
})
$.get("modules/body/web/investor.php",{
},function(data){
$("#investor_holder").html(data)
})
$.get("modules/body/investor_login.php",{
},function(data){
$("#invlogin_holder").html(data)
})
})