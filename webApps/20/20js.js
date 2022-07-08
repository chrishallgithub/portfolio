var m = 20;
var s = 00;
var on = 0;
var alerter = document.getElementById('alerter');
//defaults
var soundChoice = "jazz";
var alertChoice = "on";

function toggleTimer(){
if(on==1){
	on=0;
	timedCount();
	}
else if(on==0){
	on=1;
	alerter.pause();
	}

}

function timedCount(){
if (on==0) {
		if(s<10){
			//document.getElementById('txt').val=m+":0"+s;
		$("#txt").html(m+":0"+s);
		}
		else{
		$("#txt").html(m+":"+s);
		}
		s=s-1;
		setTimeout("timedCount()",1000);
		
		if(s==-1){
		s=59;
		m=m-1;}
		
		if(m==-1){
			//play sound
			if(soundChoice != "off"){
				alerter.play();
			}
			else{
				//alert (soundChoice);
			}
			if(alertChoice != "off"){
				alert("Focus on something 20ft away for the next 20 seconds.\n\nThis reminder will return in 20 minutes.");
				if(soundChoice != "off"){
				alerter.pause();
			}
				
			}
			else{
				//alert (alertChoice);
			}
			
			
			m=20;
			s=00;
		}
		
			
	}
}

function init(){
	//alert("Focus on something 20ft away for the next 20 seconds.\n\nThis reminder will return in 20 minutes.");
	timedCount();
	
		//settings box - draw the X
		var c=document.getElementById("closeX");
		var ctx=c.getContext("2d");
		ctx.strokeStyle="#1199cc";
		ctx.lineWidth=2;
		ctx.moveTo(0,0);
		ctx.lineTo(14,14);
		ctx.moveTo(14,0);
		ctx.lineTo(0,14);
		ctx.stroke();
		
		//about box - draw the X
		var c=document.getElementById("closeAboutX");
		var ctx=c.getContext("2d");
		ctx.strokeStyle="#1199cc";
		ctx.lineWidth=2;
		ctx.moveTo(0,0);
		ctx.lineTo(14,14);
		ctx.moveTo(14,0);
		ctx.lineTo(0,14);
		ctx.stroke();
		
		//pause box - draw the X
		var c=document.getElementById("closePauseX");
		var ctx=c.getContext("2d");
		ctx.strokeStyle="#1199cc";
		ctx.lineWidth=2;
		ctx.moveTo(0,0);
		ctx.lineTo(14,14);
		ctx.moveTo(14,0);
		ctx.lineTo(0,14);
		ctx.stroke();
	
}



$("#settingsLink").click(
  function () {
	$("#settingsAlertBackground").css({'display' : 'inline'});
	}
);

$("#closeX").click(
  function () {
	$("#settingsAlertBackground").css({'display' : 'none'});
	}
);



$("#aboutLink").click(
  function () {
	$("#aboutAlertBackground").css({'display' : 'inline'});
	}
);

$("#closeAboutX").click(
  function () {
	$("#aboutAlertBackground").css({'display' : 'none'});
	}
);


$("#pauseLink").click(
  function () {
	$("#pauseAlertBackground").css({'display' : 'inline'});
	}
);

$("#closePauseX").click(
  function () {
	$("#pauseAlertBackground").css({'display' : 'none'});
	on=0;
	timedCount();
	}
);


$("input[name='soundOption']").click(
	function(){
	soundChoice = $("input[name='soundOption']:checked").val();
	//alert (soundChoice);
		if(soundChoice=="beep"){
			alerter.setAttribute("src", "beep20.mp3");
			//alerter.play();
		}
		if(soundChoice=="jazz"){
			alerter.setAttribute("src", "jazz20.mp3");
			//alerter.play();
		}
		if(soundChoice=="forest"){
			alerter.setAttribute("src", "forest20.mp3");
			//alerter.play();
		}
		if(soundChoice=="ocean"){
			alerter.setAttribute("src", "waves20.mp3");
			//alerter.play();
		}
		if(soundChoice=="off"){
			//have to ensure at least one (alert or sound) is selected, otherwise there will be no alert.
				if(alertChoice=="off" && soundChoice=="off"){
				alert("At least one form of alert needs to be selected.");
				alertChoice="on";
				$('input:radio[name=alertOption]:nth(0)').attr('checked',true);
			}
		}
	}

);

//have to ensure at least one (alert or sound) is selected, otherwise there will be no alert.
$("input[name='alertOption']").click(

	function(){
	alertChoice = $("input[name='alertOption']:checked").val();
	//alert (alertChoice);
		if(alertChoice=="off" && soundChoice=="off"){
				alert("At least one form of alert needs to be selected.");
				alertChoice="on";
				$('input:radio[name=alertOption]:nth(0)').attr('checked',true);
			}
	}

);