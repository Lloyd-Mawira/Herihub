$(document).ready(function(){
$("#next").click(function(){
	$(".innovation_pages").hide()
	 $("#second_page").show();
})
	
$("#save_innovation").click(function(){
			 var loader=$("#loader").html()
			 var my_user=$("#global_u_email").val();
			 var stage=$("#stage").val()
			 var innovation_name=$("#innovation_name").val()
			 var innovators_name=$("#innovators_name").val()
			 var innovation_category=$("#innovation_category").val()
			 var inno_name=btoa(innovation_name);
			 var innovators=btoa(innovators_name);
			 var category=btoa(innovation_category);
			 var staged=btoa(stage);
		     var fund="";
            var commn="";
            var patner="";
            var implement="";

            var Communities="";
             if($("#implementers").prop("checked")){
               var  implementers="implementers";
               var implement=btoa(implementers)
             }else{

             }
             if($("#patnership").prop("checked")){
               var  patnership="patnership";
               var patner=btoa(patnership);
             }else{

             }
             if($("#funding").prop("checked")){
               var  funding="funding";
               var fund=btoa(funding);
             }else{

             }
             if($("#Communities").prop("checked")){
               var  Communities="Communities";
               var commn=btoa(Communities);
             }else{

             }
        
if(stage && innovation_name && innovation_category){

	if(fund || commn || implement || patner){
		  $("#error_displaye").html(loader)
      var mode=btoa('<?php echo $mode?>');
      var Innovation_Id=btoa('<?php echo $Innovation_Id?>');
      $.post("modules/system/external/pages/innovation/save_first.php",{
      	fund:fund,
      	commn:commn,
      	patner:patner,
      	implement:implement,
      	staged:staged,
      	inno_name:inno_name,
      	innovators:innovators,
      	category:category,
      	my_user:my_user,
        mode:mode,
        Innovation_Id:Innovation_Id
      },function(data){
     if($.trim(data)=="success"){
       $.post("modules/system/external/pages/innovation/second_page.php",{
      	fund:fund,
      	commn:commn,
      	patner:patner,
      	implement:implement,
      	staged:staged,
      	inno_name:inno_name,
      	innovators:innovators,
      	category:category,
      	my_user:my_user,
        mode:mode,
        Innovation_Id:Innovation_Id
      	},function(data){
      		$(".innovation_pages").hide(data)
      		$("#second_page").html(data).show()
      		$("#error_displaye").html("")
      		$("#next").show();
      		$("#save_innovation").hide()
      	})
     }else{
    $("#error_displaye").html(data)
     }

      })
}else{
	$("#error_displaye").html("")
	$("#alert_user").html("select atleast one option!").css("color","red");
}

}else{
	$("#error_displaye").html("Some fields are empty")
}
			
		})
		$("#innovator_partners").change(function(){
			var innovator_partners=$(this).val()
			if(innovator_partners=="Partnership"){
				$("#innovators_frt").show()

			}else{
               $("#innovators_frt").hide()
			}
		})
	})