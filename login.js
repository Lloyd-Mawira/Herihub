
$(document).ready(function(){

  var loader=$("#loader").html();
  var buttonclick="login";
 /* var mail_recover="#recover";
  $(recovery_mail).click(function(){
var mailing="modules/mails/send_recover.php";
var mail=btoa($("recovery_mail").val());
var terget_recovery="#mail_recover";
$.post(""+mailing+""{mail:mail},function(responce){

})
  })
})*/


$("#verify_account").click(function(){
  var loader=$("#loader").html();
  var code=btoa($("#verify").val());
  var my_code=$("#global_u_email").val();
  //$("#error_display").html("my dode"+my_code)
  if(code){
    //$("#error_display").html(code+"="+my_code)
$("#loader_display").html(loader);
//$.post("modules/mails/verify.php",{
if(code==my_code){
$("#loader_display").html("");
var user_email=$("#user_email").val();
var pass=$("#passsign").val();
var busername=btoa(user_email);
var bpass=btoa(pass);
if(bpass && busername){


}else{
  busername=btoa($("#username").val());
  bpass=btoa($("#Password").val());
}
//$("#error_display").html(busername)
$("#back_tologin").click();
$.post("modules/functions/login.php",{
bpass:bpass,
busername:busername

},function(data){
  //$("#error_display").html(data)
  if($.trim(data)=="exists"){
    //account_type
buttonclick="";

$("#global_u_email").val(busername);
  $.post("modules/pages/landingpage.php",{ busername:busername,bpass:bpass },function(data){
    $("#loader_display").html("")
    $("#splashpage").hide()
    $("#landingpage").show().html(data); })

}else{

}
})


}else{
 $("#loader_display").html("");
 $("#loader_display").html("Wrong code! Please enter the correct verification code").css('color','red');
 
}


  }else{
 $("#loader_display").html("Verification code required!").css('color','red');
  }
})


$("#confirm_signup").click(function(){
var loader=$("#loader").html();
//$("#loader_display").html(loader);
var register_data=btoa($("#register_as").val())
 var user_email=$("#user_email").val();
 var password=$("#passsign").val();
 var confirm_password=$("#repeatpassrword").val();
               if(user_email==""||password==""||confirm_password==""){
                $("#loader_display").html("")
 //$("#user_email").attr("placeholder","Email required!");
        $("#error_display").html("All fields are required").css('color','red');
                  }else{
//$("#error_display").html()
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
    var emailaddress=user_email;
//$("#error_display").html(emailaddress)
var password=$("#passsign").val();
    var chekedpassword=$("#repeatpassrword").val();
               if(!chekedpassword || !password){

  $("#loader_display").html("")
$("#error_display").html("Check your password!").css('color','red');

                  }
                  else{
    if(password==chekedpassword){
var my_pass=password;

var nmypsaa=btoa(my_pass);
var mmuser=btoa(emailaddress);
$("#loader_display").html(loader);
//$("#error_display").html(mmuser)
$.post("modules/functions/add.php",{nmypsaa:nmypsaa,mmuser:mmuser,register:register_data},function(data){
if($.trim(data)=="success"){

$.post("modules/mails/send.php",{
  mmuser:mmuser
},function(responce){
  //$("#global_u_email").val($.trim(data));
  $("#global_u_email").val($.trim(responce));
  //$("#error_display").html()
    //$("#error_display").html(data)
    buttonclick="verify_account";
  $("#loader_display").html("");
$("#error_display").html("")
  $(".login_s").hide();
  $("#verify_c").show()
  //$("#login_wrtp").hide();
 
})
 // $("#loader_display").html("")


}else{
  $("#loader_display").html("");
 $("#error_display").html(data) 
}
})

}else{
   $("#error_display").html("")
  //$("#error_display").html("Oops: Addresses do not match")
  $("#error_display").html("The passwords you entered do not match!").css('color','red');
}
}


      //$("#error_display").html(email_address)
 $(".email_check").show();
 //$("#error_display").html("").css('color','red');
    }


}




})



$("#forgetpass").click(function(){
//$("#login_wrtp").hide()
$(".login_s").hide();
$("#forgotpass").show();
//$("#error_display").html()
})

$("#back_dtologin").click(function(){
  $("#back_tologin").click();
})
$("#backtologin").click(function(){
  $("#back_tologin").click();
  $(".recoverpass").hide()
})
$("#signupbtn").click(function(){
  $("#forgotpass").hide();
  $("#login_wrtp").hide();
  $("#disclaimer").show();
  //$(".login_s").hide();
})

$("#recoverbtn").click(function(){
  //$("#error_display").html()

  $("#error_display").html("");
  $("#loader_display").html(loader);
var recovery_mail=$("#recovery_mail").val()
var recovery_email=btoa(recovery_mail);
if (recovery_mail==""){
  $("#loader_display").html("");
  $("#recovery_mail").attr("placeholder","Email address cannot be empty!");
}else{

  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(recovery_mail)){
      $("#loader_display").html("");
        //email_address="";
        //$("#email_address").val("");
        $("#recovery_mail").attr("placeholder","Wrong email format!");
        $("#error_display").html("Wrong Email format! Please check your email address!").css('color','red');
       // $("#loader_error").html("Check your email Format!");
    }else{
      $("#error_display").html("");
$.post("modules/functions/check.php",{ recovery_email:recovery_email },function(responce){
if($.trim(responce)=="exists"){

var mmuser=btoa(recovery_mail);
$.post("modules/mails/recover.php",{ mmuser:mmuser },function(responce){

$("#global_u_email").val($.trim(responce));
$("#loader_display").html("");
$(".login_s").hide();
$("#forgotpass").hide();
$("#recover_c").show();

});

}else{
if($.trim(responce)=="email does not exist"){
 $("#error_display").html(responce); 
}

}
})
}
}

})


$("#recover_account").click(function(){
  $("#loader_display").html(loader);
  $("#error_display").html("");
var my_code=$("#global_u_email").val();
var code=btoa($("#recover").val());
  if(code==""){
    $("#loader_display").html("");
  $("#recover").attr("placeholder","This field cannot be empty!! Please enter the code here!").css('color','red');
}
else{
  if (my_code==code){
    $("#loader_display").html("");
    $(".login_s").hide();
    $("#forgotpass").hide();
    $("#recover_c").hide();
    $("#new_pass").show();
    $("#error_display").html("");
  }
  else{
    $("#loader_display").html("");
    $("#error_display").html("You have entered a wrong code");
  }
}
})

$("#save_password").click(function(){
  $("#loader_display").html(loader);
  $("#error_display").html("");
  //var recovery_mail=$("#recovery_mail").val()
  //var mmuser=btoa(recovery_mail);
  var mail=$("#recovery_mail").val()
  var password=btoa($("#newpassword").val());
  var confirm_password=btoa($("#confirmpassword").val());
  var encryptedmail=btoa(mail);
  if(password && confirm_password){
    if(password!=confirm_password){
      $("#loader_display").html("");
      $("#error_display").html("Passwords do not match");
    }else{
      $("#error_display").html("");
      $.post("modules/functions/passwordupdate.php",{ password:password,encryptedmail:encryptedmail },function(responce){
        if($.trim(responce)=="Password updated successfully"){
          $("#loader_display").html("");
         // $("#error_display").html ("Pasword updated successfully. Please use your new password to login");
          $("#back_tologin").click();
        }else{
        if($.trim(responce)=="wrong email"){
          $("#error_display").html("Cannot receive email");
        }
        }
      });
    }
  }else{
    $("#loader_display").html("");
    $("#error_display").html("All fields are required");
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
//$("#error_display").html()
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(user_email)){
        $("#email_address").val("");
      $(".email_check").hide();
        $("#user_email").attr("placeholder","Wrong email format!");
        $("#error_display").html("Check your email address!").css('color','red');
       // $("#loader_error").html("Check your email Format!");
    }else{
      //$("#error_display").html(email_address)
 $(".email_check").show();
 $("#error_display").html("").css('color','red');
    }
//$(".cheked_pass").show();

                  }
  });








  //$("#error_display").html()
$("#login").click(function(){
var loder=$("#loader").html();
//$("#error_display").html(loder)
  $("#loader_display").html(loder)
var username=$("#username").val();
var pass=$("#Password").val();
var busername=btoa(username);
var bpass=btoa(pass);
//$("#error_display").html(busername)
$.post("modules/functions/functions.php",{
bpass:bpass,
busername:busername

},function(data){
  //$("#error_display").html(data)
  if($.trim(data)=="exists"){
    buttonclick="";
$("#global_u_email").val(busername);
  $.post("modules/pages/landingpage.php",{ busername:busername,bpass:bpass },function(data){
    $("#loader_display").html("");
    $("#splashpage").hide();
    $("#landingpage").show().html(data); })


  }else{
if($.trim(data)=="verification"){
var mmuser=busername;
$.post("modules/mails/send.php",{
  mmuser:mmuser
},function(responce){
  //$("#global_u_email").val($.trim(data));
  $("#global_u_email").val($.trim(responce));
  //$("#error_display").html()
    //$("#error_display").html(data)
    buttonclick="verify_account";
  $("#loader_display").html("");
$("#error_display").html("")
  $(".login_s").hide();
  $("#verify_c").show()
  //$("#login_wrtp").hide();
 
})


}else{



  $("#loader_display").html("")
$("#error_display").html(data).css('color','red');
}
  }
  
})
})
$("#Signup").click(function(){
  buttonclick="";
 // $("#error_display").html(buttonclick)
$("#error_display").html("")
  $(".login_s").hide();
 // $("#disclaimer").show()
  //$("#login_wrtp").hide();
  //$("#Signupp").show();
$("#account_select").show()
})
$("#back_tologin").click(function(){
 // buttonclick="login";
// $("#error_display").html()
$("#error_display").html("")
  $(".login_s").hide();
  $("#login_nn").show();

})
$("#backagain_login").click(function(){
  $("#back_tologin").click()
})
$("#Next_signt").click(function(){

 var register_as=$("#register_as").val() 
 if(register_as==""){
$("#error_display").html("Select an account type!")
 }else if(register_as=="Innovator"){
$("#error_display").html("")
  $(".login_s").hide();
 $("#disclaimer").show()
  $("#login_wrtp").hide();
  //$("#Signupp").show();
//$("#account_select").show()
 }else if(register_as=="Investor"){
$("#error_display").html("")
  $(".login_s").hide();
 $("#invest_disclaimer").show()
  $("#login_wrtp").hide();
  //$("#Signupp").show();
//$("#account_select").show()
 }else{

 }
})


  $("#passsign").focusin(function(){
   $(".cheked_pass").hide();
   $("#error_display").html("").css('color','red');
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
   $("#error_display").html("").css('color','red');
  });
  $("#repeatpassrword").focusout(function(){
  $("#pass_t").hide();
   $("#strengthmeter").hide();
    var password=$("#passsign").val();
    var chekedpassword=$("#repeatpassrword").val();
               if(chekedpassword==""){
         $(".repeat_check").hide();
                  }else{
    if(password==chekedpassword){
$("#error_display").html("").css('color','red');
$(".repeat_check").show();
     }else{


      $("#error_display").html("password mismatch!")
 $(".repeat_check").hide();
     }



$(".cheked_pass").show();
                  }
  });








$(".span_disclamer").click(function(){
  var register_as=$("#register_as").val();
   var my_id=$("#global_u_email").val();
var my_role=$(this).attr("role");
  if(register_as=="Investor"){
 
//$("#error_display").html(my_role)
if(my_role=="agree"){
  


  if($("#agreed_inv").prop("checked")){

/*
$.post("modules/system/external/pages/submit.php",{
          
    },function(data){
      $("#div_displayer").html(data)
    })
*/
buttonclick="confirm_signup";
$("#error_display").html("")
  $(".login_s").hide();
  $("#login_wrtp").show();
 $("#Signupp").show();



  }else{

$("#disclaimer_error").html("Agree to the terms and conditions first!").css('color','red');


  }


}else{
  $("#login_wrtp").show();
$("#back_tologin").click();
} 
}else if(register_as=="Innovator"){

if(my_role=="agree"){
  


  if($("#agree").prop("checked")){

/*
$.post("modules/system/external/pages/submit.php",{
          
    },function(data){
      $("#div_displayer").html(data)
    })
*/
buttonclick="confirm_signup";
$("#error_display").html("")
  $(".login_s").hide();
  $("#login_wrtp").show();
 $("#Signupp").show();



  }else{

$("#disclaimer_error").html("Agree to the terms and conditions first!").css('color','red');


  }


}else{
  $("#login_wrtp").show();
$("#back_tologin").click();
} 










}else{

}

})

/*$("#agree").click(function(){
  if($("#agree").prop("checked")){
 $("#btn_agreed").show()
  }else{
$("#btn_agreed").hide()
  }
})*/

$(document).keypress(function(e) {
      if(e.which == 13) {
       // $("#error_display").html(buttonclick)
$("#"+buttonclick+"").click();
}
    });
  })











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
