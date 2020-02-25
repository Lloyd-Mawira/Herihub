$(document).ready(function(){
$("#confirm_signup").click(function(){
var loader=$("#loader").html();
$("#loader_display").html(loader);
 var user_email=$("#user_email").val();
               if(user_email==""){
               	$("#loader_display").html("")
 $("#user_email").attr("placeholder","Email required!");
        $("#error_display").html("Check your email address!").css('color','red');
                	}else{
//alert()
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(user_email)){
        user_email="";
        $("#user_email").val("");
      $(".email_check").hide();
      	$("#loader_display").html("")
        $("#user_email").attr("placeholder","Wrong email format!");
        $("#error_display").html("Check your email address!").css('color','red');
       // $("#loader_error").html("Check your email Format!");
    }else{
    var	emailaddress=user_email;
//alert(emailaddress)
var password=$("#passsign").val();
    var chekedpassword=$("#repeatpassrword").val();
               if(!chekedpassword || !password){

	$("#loader_display").html("")
$("#error_display").html("Check your password!").css('color','red');

                	}else{
    if(password==chekedpassword){
var my_pass=password;

var nmypsaa=btoa(my_pass);
var mmuser=btoa(emailaddress);
$("#loader_display").html(loader);
//alert(mmuser)
$.post("modules/functions/add.php",{
	nmypsaa:nmypsaa,
	mmuser:mmuser
},function(data){
		$("#loader_display").html("")
$("#error_display").html(data)

})

}else{
	$("#error_display").html("password mismatch!").css('color','red');
}
}


    	//alert(email_address)
 $(".email_check").show();
 $("#error_display").html("").css('color','red');
    }


}




})















$("#user_email").focusin(function(){
   $(".email_check").hide();
   $("#user_email").val("");
   $("#error_display").html("").css('color','red');
  });
$("#user_email").focusout(function(){
    var user_email=$("#user_email").val();
               if(user_email==""){


         $(".email_check").hide();


                	}else{
//alert()
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(user_email)){
        email_address="";
        $("#email_address").val("");
      $(".email_check").hide();
        $("#user_email").attr("placeholder","Wrong email format!");
        $("#error_display").html("Check your email address!").css('color','red');
       // $("#loader_error").html("Check your email Format!");
    }else{
    	//alert(email_address)
 $(".email_check").show();
 $("#error_display").html("").css('color','red');
    }
//$(".cheked_pass").show();

                	}
  });



$(document).keypress(function(e) {
      if(e.which == 13) {
$("#login").click();
}
    });




	//alert()
$("#login").click(function(){
var loder=$("#loader").html();
//alert(loder)
  $("#loader_display").html(loder)
var username=$("#username").val();
var pass=$("#Password").val();
var busername=btoa(username);
var bpass=btoa(pass);
//alert(busername)
$.post("modules/functions/functions.php",{
bpass:bpass,
busername:busername

},function(data){
	//alert(data)
  if($.trim(data)=="exists"){
$("#global_u_email").val(busername);
  $.post("modules/pages/landingpage.php",{
busername:busername
    },function(data){
 $("#loader_display").html("")
//alert(data)
$("#splashpage").hide();
$("#landingpage").show().html(data);
    })


  }else{
  $("#loader_display").html("")
$("#error_display").html(data);
  }
	
})
})
$("#Signup").click(function(){
$("#error_display").html("")
  $(".login_s").hide();
  $("#disclaimer").show()
  $("#login_wrtp").hide();
  //$("#Signupp").show();

})
$("#back_tologin").click(function(){
$("#error_display").html("")
  $(".login_s").hide();
  $("#login_nn").show();

})





})

$(document).ready(function(){
  $("#passsign").focusin(function(){
   $(".cheked_pass").hide();
  });
  $("#passsign").focusout(function(){
    var password=$("#passsign").val();
               if(password==""){
         $(".cheked_pass").hide();
                	}else{
$(".cheked_pass").show();
                	}
  });

  $("#repeatpassrword").focusin(function(){
   $(".repeat_check").hide();
  });
  $("#repeatpassrword").focusout(function(){
  	var password=$("#passsign").val();
    var chekedpassword=$("#repeatpassrword").val();
               if(chekedpassword==""){
         $(".repeat_check").hide();
                	}else{
    if(password==chekedpassword){

$(".repeat_check").show();
     }else{


     	$("#error_display").html("password mismatch!")
 $(".repeat_check").hide();
     }



$(".cheked_pass").show();
                	}
  });






});
            var myApp = angular.module("myapp", []);
            myApp.controller("PasswordController", function($scope) {

                var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

                $scope.passwordStrength = {
                    "float": "left",
                    "height": "10px",
                    "margin-top": "5px"
                };

                $scope.analyze = function(value) {

                	var password=$("#passsign").val();
                	if(password==""){
                $("#pass_t").hide();
                $("#strengthmeter").hide();
                	}else{
                		$("#pass_t").show();
                		$("#strengthmeter").show();
                    if(strongRegex.test(value)){
                    
                        $scope.passwordStrength["background-color"] = "green";
                        $scope.passwordStrength["width"] = "100%";
                        $("#str_stregnth").html("100%");
                    } else if(mediumRegex.test(value)) {
                    	
                        $scope.passwordStrength["background-color"] = "orange";
                        $scope.passwordStrength["width"] = "70%";
                        $("#str_stregnth").html("70%");
                    } else {
                    	
                        $scope.passwordStrength["background-color"] = "red";
                        $scope.passwordStrength["width"] = "40%";
                        $("#str_stregnth").html("40%");
                    }
                }
                };

            });
      
  $(document).ready(function(){
$(".span_disclamer").click(function(){
  var my_id=$("#global_u_email").val();
var my_role=$(this).attr("role");
//alert(my_role)
if(my_role=="agree"){
  


  if($("#agree").prop("checked")){

/*
$.post("modules/system/external/pages/submit.php",{
          
    },function(data){
      $("#div_displayer").html(data)
    })
*/
$("#error_display").html("")
  $(".login_s").hide();
  $("#login_wrtp").show();
 $("#Signupp").show();



  }else{

$("#disclaimer_error").html("Agree to the terms and conditions first!")


  }


}else{
  $("#login_wrtp").show();
$("#back_tologin").click();
} 

})

/*$("#agree").click(function(){
  if($("#agree").prop("checked")){
 $("#btn_agreed").show()
  }else{
$("#btn_agreed").hide()
  }
})*/


  })