
	$(document).ready(function(){
		//alert()
		var my_user=$("#global_u_email").val();
		var account='<?php echo $account?>';
		//alert(account)
	   // alert(my_user)
		//disabling right clicking
	   $(document).bind("contextmenu",function(e){
        
        //return false;
      //alert("Protected by ICTA!")
       //return false;

}) 
   var my_id=my_user;
		$.post("modules/system/"+account+"/pages/Dashboard/Dashboard.php",{
 my_id:my_id
	},function(data){
		$("#home").html(data)
	})
	$.post("modules/system/"+account+"/control/control.php",{
     my_user:my_user
	},function(data){
	 //alert(data);
		$("#div_home_control").html(data)
		//$("#menu_page").html(data)
	})
	  $.post("modules/system/"+account+"/header/header.php",{
  my_user:my_user
	},function(data){
	 //alert(data);
		$("#nbsheader_holder").html(data)
		
	}) 
$.post("modules/system/"+account+"/control/menu.php",{
 my_user:my_user
	},function(data){
	 //alert(data);
		//$("#div_home_control").html(data)
		$("#menu_page").html(data)
	})
	})
