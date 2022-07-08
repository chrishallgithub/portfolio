
/*
//draw the gif "X"
cG=document.getElementById("gifs1");
ctxG=cG.getContext("2d");
ctxG.strokeStyle="#f00";
ctxG.lineWidth=2;
ctxG.moveTo(42,0);
ctxG.lineTo(0,25);
ctxG.stroke();
*/		
	//detect canvas or fontface
  if (!Modernizr.canvas || !Modernizr.canvas) {
    alert("Your web browser does not support HTML5, and so some elements will not display correctly. Please update your web browser to view this website correctly.");
  }
  else{
	//do nothing
  }

/*
//submit the form
$("#submit").click(function () {
	$('#form').submit();
});
*/



//add hover over stuff here. CSS was conflicting with the gif toggle.
$("#case1").hover(function(){
	$("#case1").css({"background-image": "url('cases/telia/telia.png')"});
}, function(){
	if(gifs == 0){
		$("#case1").css({"background-image": "url('cases/telia/telia.gif')"});
	}
});

$("#case3").hover(function(){
	$("#case3").css({"background-image": "url('cases/megaphone/megaphoneLogo.png')"});
}, function(){
	if(gifs == 0){
		$("#case3").css({"background-image": "url('cases/megaphone/megaphoneLogo.gif')"});
	}
});

$("#case4").hover(function(){
	$("#case4").css({"background-image": "url('cases/moderna/moderna.png')"});
}, function(){
	if(gifs == 0){
		$("#case4").css({"background-image": "url('cases/moderna/moderna.gif')"});
	}
});


$("#case8").hover(function(){
	$("#case8").css({"background-image": "url('cases/exploringTech/exTech.png')"});
}, function(){
	if(gifs == 0){
		$("#case8").css({"background-image": "url('cases/exploringTech/exTech.gif')"});
	}
});

$("#case5").hover(function(){
	$("#case5").css({"background-image": "url('cases/pingPong/pingPong.png')"});
}, function(){
	if(gifs == 0){
		$("#case5").css({"background-image": "url('cases/pingPong/pingPong.gif')"});
	}
});


$("#case7").hover(function(){
	$("#case7").css({"background-image": "url('cases/webApps/webAppsSmall.png')"});
}, function(){
	if(gifs == 0){
		$("#case7").css({"background-image": "url('cases/webApps/webApps.gif')"});
	}
});

$("#case6").hover(function(){
	$("#case6").css({"background-image": "url('cases/groupDevelopment/group.png')"});
}, function(){
	if(gifs == 0){
		$("#case6").css({"background-image": "url('cases/groupDevelopment/group.gif')"});
	}
});

$("#case9").hover(function(){
	$("#case9").css({"background-image": "url('cases/copy/copySmall.png')"});
}, function(){
	if(gifs == 0){
		$("#case9").css({"background-image": "url('cases/copy/copySmall.gif')"});
	}
});

$("#case2").hover(function(){
	$("#case2").css({"background-image": "url('cases/rfid/rfid.png')"});
}, function(){
	if(gifs == 0){
		$("#case2").css({"background-image": "url('cases/rfid/rfid.gif')"});
	}
});



var gifs = 0;
$("#gifs").click(function (){
	
	if(gifs == 0){
	
		$("#case1").css({"background-image": "url('cases/telia/telia.png')"});
		$("#case2").css({"background-image": "url('cases/rfid/rfid.png')"});
		$("#case3").css({"background-image": "url('cases/megaphone/megaphoneLogo.png')"});
		$("#case4").css({"background-image": "url('cases/moderna/moderna.png')"});
		$("#case5").css({"background-image": "url('cases/pingPong/pingPong.png')"});
		$("#case6").css({"background-image": "url('cases/groupDevelopment/group.png')"});
		$("#case7").css({"background-image": "url('cases/webApps/webAppsSmall.png')"});
		$("#case8").css({"background-image": "url('cases/exploringTech/exTech.png')"});
		$("#case9").css({"background-image": "url('cases/copy/copySmall.png')"});
		
		//ctxG.clearRect ( 0 , 0 , 45 , 30 );// reset the Gif canvas
		$("#gifs").html("GIFs: Off");
		gifs = 1;
	
	}
	
	else if(gifs == 1){
		$("#case1").css({"background-image": "url('cases/telia/telia.gif')"});
		$("#case2").css({"background-image": "url('cases/rfid/rfid.gif')"});
		$("#case3").css({"background-image": "url('cases/megaphone/megaphoneLogo.gif')"});
		$("#case4").css({"background-image": "url('cases/moderna/moderna.gif')"});
		$("#case5").css({"background-image": "url('cases/pingPong/pingPong.gif')"});
		$("#case6").css({"background-image": "url('cases/groupDevelopment/group.gif')"});
		$("#case7").css({"background-image": "url('cases/webApps/webApps.gif')"});
		$("#case8").css({"background-image": "url('cases/exploringTech/exTech.gif')"});
		$("#case9").css({"background-image": "url('cases/copy/copySmall.gif')"});
		
		$("#gifs").css({"text-decoration": "none"});
		$("#gifs").html("GIFs: On");
		
		/*
		//draw the gif "X"
		cG=document.getElementById("gifs1");
		ctxG=cG.getContext("2d");
		ctxG.strokeStyle="#f00";
		ctxG.lineWidth=2;
		ctxG.moveTo(42,0);
		ctxG.lineTo(0,25);
		ctxG.stroke();
		*/
		
		gifs = 0;
	}
	
});

/*
function //logCase(e){	
	$.ajax({
    type: "POST",
    url: "visitors/pageHits.html",
    data: { 'visitedCase': e },
    cache: false
    });
}
*/


//fade everything out. Fade the case in.

//1 of 2 (add to hash list)
$("#case1").click(function(){
	
	$("#casesContainer").ScrollTo(1000);

	$("#fullCasesContainer").load("cases/telia/index.html #fullCase", function() {
		$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
		$("#fullCasesContainer").fadeIn();
		$("#exit").fadeIn();
		location.hash = '#!/telia'
		drawX();
		$("#bottomCover").css({"height": "15px"});
	
		});
	
		//Check which cases are being viewed
		//logCase("telia");
	});


});




//1 of 2 (add to hash list)
$("#experiments").click(function(){
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/experiments/index.html #fullCase", function() {
		$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
			$("#fullCasesContainer").fadeIn();
			$("#exit").fadeIn();
			location.hash = '#!/experiments'
			drawX();
			$("#bottomCover").css({"height": "15px"});
			
			});
			
			//Check which cases are being viewed
			//logCase("experiments");			
		
		});

});

//1 of 2 (add to hash list)
$("#case4").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/moderna/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/moderna'
	drawX();
	$("#bottomCover").css({"height": "15px"});

	});
	
	//Check which cases are being viewed
	//logCase("moderna");
});


//1 of 2 (add to hash list)
$("#case3").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/megaphone/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/megaphone'
	drawX();
	$("#bottomCover").css({"height": "220px"});
	});
	
	//Check which cases are being viewed
	//logCase("megaphone");
});


//1 of 2 (add to hash list)
$("#case8").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/exploringTech/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/exploringTech'
	drawX();
	$("#bottomCover").css({"height": "220px"});

	});
	
	//Check which cases are being viewed
	//logCase("exploringTech");
});



//1 of 2 (add to hash list)
$("#case5").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/pingPong/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/pingPong'
	drawX();
	$("#bottomCover").css({"height": "150px"});

	});
	
	//Check which cases are being viewed
	//logCase("pingPong");
});

//1 of 2 (add to hash list)
$("#case7").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/webApps/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/webApps'
	drawX();
	$("#bottomCover").css({"height": "150px"});

	});
	
	//Check which cases are being viewed
	//logCase("webApps");
});

//1 of 2 (add to hash list)
$("#case6").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/groupDevelopment/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/groupDevelopment'
	drawX();
	$("#bottomCover").css({"height": "170px"});

	});
	
	//Check which cases are being viewed
	//logCase("groupDevelopment");
});

//1 of 2 (add to hash list)
$("#case9").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/copy/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/copy'
	drawX();
	$("#bottomCover").css({"height": "220px"});


	});
	
	//Check which cases are being viewed
	//logCase("copy");
});

//1 of 2 (add to hash list)
$("#case2").click(function(){
	
	$("#casesContainer").ScrollTo(1000);
	$("#fullCasesContainer").load("cases/rfid/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	location.hash = '#!/rfid'
	drawX();
	$("#bottomCover").css({"height": "200px"});
	
	});
	
	//Check which cases are being viewed
	//logCase("rfid");
});


//2 of 2. make the hash work from outside. Links
if(window.location.hash == "#!/experiments") {
	$("#fullCasesContainer").load("cases/experiments/index.html #fullCase");	
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "15px"});
	
	});
	
	//Check which cases are being viewed
	//logCase("experiments-link");
	
	
} else if(window.location.hash == "#!/telia") {
	$("#fullCasesContainer").load("cases/telia/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "15px"});	
	});
	//Check which cases are being viewed
	//logCase("telia-link");
	
} else if(window.location.hash == "#!/moderna") {
	$("#fullCasesContainer").load("cases/moderna/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "15px"});
	
	});
	//Check which cases are being viewed
	//logCase("moderna-link");
	
} else if(window.location.hash == "#!/megaphone") {
	$("#fullCasesContainer").load("cases/megaphone/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "220px"});
	
	});
	//Check which cases are being viewed
	//logCase("megaphone-link");
	
} else if(window.location.hash == "#!/exploringTech") {
	$("#fullCasesContainer").load("cases/exploringTech/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "220px"});	
	});
	//Check which cases are being viewed
	//logCase("exploringTech-link");
	
} else if(window.location.hash == "#!/pingPong") {
	$("#fullCasesContainer").load("cases/pingPong/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "150px"});	
	});
	//Check which cases are being viewed
	//logCase("pingPong-link");
	
} else if(window.location.hash == "#!/webApps") {
	$("#fullCasesContainer").load("cases/webApps/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "150px"});	
	});
	//Check which cases are being viewed
	//logCase("webApps-link");
	
} else if(window.location.hash == "#!/groupDevelopment") {
	$("#fullCasesContainer").load("cases/groupDevelopment/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "170px"});	
	});
	//Check which cases are being viewed
	//logCase("groupDevelopment-link");
	
} else if(window.location.hash == "#!/copy") {
	$("#fullCasesContainer").load("cases/copy/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "220px"});	
	});
	//Check which cases are being viewed
	//logCase("copy-link");
	
} else if(window.location.hash == "#!/rfid") {
	$("#fullCasesContainer").load("cases/rfid/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){;
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "200px"});	
	});
	//Check which cases are being viewed
	//logCase("rfid-link");


} else if(window.location.hash == "#!/about") {
	
	setTimeout(function(){$("#footer").ScrollTo(1000);},100);

} else if(window.location.hash == "#!/contact") {

	setTimeout(function(){$("#contacter").ScrollTo(1000);},100);
	
} else {
	//Do nothing
	};


var textbox = 0;
var c;
var ctx;

$("#crochet").click(function () {
	
	if(textbox == 0){
		$('#crochet').attr("title", "Close");
		$('#submit, #form, #inputText').css({"margin-top": "0px", "border-top": "0"}); //reveal the form

		$('#crochet').css({"width": "32px", "height": "32px", "background": "none", "margin-top": "0px", "margin-left": "0px", "background-color": "#fff"}); //prepare for the for the CSS cross

		//draw the "X"
		c=document.getElementById("crochet1");
		ctxC=c.getContext("2d");
		ctxC.strokeStyle="#000";
		ctxC.lineWidth=4;
		ctxC.moveTo(5,5);
		ctxC.lineTo(27,27);
		ctxC.moveTo(27,5);
		ctxC.lineTo(5,27);
		ctxC.stroke();
	
	
		$('body').toggleClass('nojQuery');//remove the onhover class
		
		//focus on the field
		document.getElementById("inputText").focus();
		
		textbox = 1;
		
	}
	
	else if(textbox == 1){		
		$('#crochet').attr("title", "Click Me!");
		$('#submit, #form').css({"margin-top": "-50px"}); //hide the form
		$('#crochet').css({"background": "url(images/musicPlayerSprite.png) -10px -10px", "background-repeat": "no-repeat", "background-position": "center bottom", "background-color": "#fff"}); //prepare for the crochet
		ctxC.clearRect ( 0 , 0 , 30 , 30 );// reset the canvas
		$('#grooveWidget').html("");
		$('#form')[0].reset();		
		textbox = 0;
		$('body').toggleClass('nojQuery');//add the onhover class
	}
	
});

var chosenSong;

$('#form').submit(function(e) {
	
	e.preventDefault();
	
		//stolen from http://stackoverflow.com/questions/9822495/how-to-check-with-js-if-flash-is-installed-or-not
	var hasFlash = ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") || (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false));

	
	
	//check if flash is installed & enabled
	if(hasFlash==true)
		{
			//continue!
			//alert("To listen to the music you requested, Flash is required. If you have a Flash-blocker, please disable it, and refresh the page.");
			alert("This webapp used Grooveshark's TinySong API, and would play for the most popular song from the search you just entered. Since Grooveshark is now closed, this no longer works. RIP Grooveshark.");
		}
		else
		{
			//alert("Flash is required for this function, but your browser does not have it installed or enabled.");
			alert("This webapp used Grooveshark's TinySong API, and would play for the most popular song from the search you just entered. Since Grooveshark is now closed, this no longer works. RIP Grooveshark.");
			//return;  //STOP THE WORLD!!!
		}
	
/*
    var input = document.getElementById('inputText').value;
	
	//Loading here! - done in PHP now
	//$(inputText).val('Loading "' + input + '" .......');
	
	var ajax = new XMLHttpRequest();
		
	ajax.open("POST",'getGroove.html',false);
	ajax.setRequestHeader('Content-Type', 'application/upload');
	ajax.send(input);
	
	//ajax magic happens here	
	
	if(ajax.readyState == 4){
		
		chosenSong = ajax.responseText;
	  
		$('#grooveWidget').html(chosenSong);		
		
		//replace "Loading" with "Now Playing"
		var t = setTimeout ( "$('#loading').replaceWith('Now playing: ');", 5000 );
		
		//scrolling text
	
		
		function songInfo(){
			$('#scrollingContainer').slideToggle('slow', function () {
			
			 $("#songInfo").css({"visibility": "visible", "margin-left": "-102px"})
			}
			);
		
		}
		
		
		//song info
		$("#songInfo").click(function () {

			$("#scrollingContainer").slideToggle("slow");
		});
		
		setTimeout(songInfo, 8000 );

	}
	
	*/
	

});

function drawX(){
		//draw the close full case "X"
		cX=document.getElementById("exit");
		ctxX=cX.getContext("2d");
		ctxX.strokeStyle="#000";
		ctxX.lineWidth=4;
		//X
		ctxX.moveTo(5,5);
		ctxX.lineTo(27,27);
		ctxX.moveTo(27,5);
		ctxX.lineTo(5,27);
		ctxX.stroke();		

}


//draw up arrows
		cA=document.getElementById("up");
		ctxA=cA.getContext("2d");
		ctxA.strokeStyle="#000";
		ctxA.lineWidth=4;
		//X
		ctxA.moveTo(18,4);
		ctxA.lineTo(18,32);
		ctxA.moveTo(18,5);
		ctxA.lineTo(8,18);
		ctxA.moveTo(18,5);
		ctxA.lineTo(28,18);
		ctxA.stroke();	
		
		cA=document.getElementById("up2");
		ctxA=cA.getContext("2d");
		ctxA.strokeStyle="#000";
		ctxA.lineWidth=4;
		//X
		ctxA.moveTo(18,4);
		ctxA.lineTo(18,32);
		ctxA.moveTo(18,5);
		ctxA.lineTo(8,18);
		ctxA.moveTo(18,5);
		ctxA.lineTo(28,18);
		ctxA.stroke();	


$("#exit, #logo").click(function () {
			$("#fullCasesContainer, #exit").fadeOut(function(){

				scrollToTop(500);
				$("#fullCasesContainer").html("");
				$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeIn();
				location.hash = '';
				$("#bottomCover").css({"height": "15px"});
			});

		});
		
		
$("#aboutClose, #contactClose").click(function () {
			$("#fullCasesContainer, #exit").fadeOut(function(){

                scrollToTop(500);
				$("#fullCasesContainer").html("");
				$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeIn();
				location.hash = '';
				$("#bottomCover").css({"height": "200px"});
			});

		});


$("#about").click(function(){
	//$("#footer").ScrollTo(1000);
    $([document.documentElement, document.body]).stop().animate({
        scrollTop: $("#footer").offset().top
    }, 1000);
	location.hash = '#!/about';
});


$("#contact").click(function(){
    //document.getElementById('contacter').scrollIntoView();
	//$("#contacter").ScrollTo(1000);

    $([document.documentElement, document.body]).stop().animate({
        scrollTop: $("#contacter").offset().top
    }, 1000);


	location.hash = '#!/contact';
});



// targets macs only - just for the background colour fix for links (noticable on hover-over)
if(navigator.userAgent.indexOf('Mac') > 0) { 
	$(".link").addClass('mac_os');
	} 
	
//on hover of one of the cases, grey every other out.
$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").hover(function(){
	$(this).siblings().css({"-webkit-filter": "grayscale(100%)", "-moz-filter": "grayscale(100%)", "-ms-filter": "grayscale(100%)", "-o-filter": "grayscale(100%)", "filter": "grayscale(100%)"});
}, function(){

	$(this).siblings().css({"-webkit-filter": "none", "-moz-filter": "none", "-ms-filter": "none", "-o-filter": "none", "filter": "none"});
});



//telia text/ image swap

function swapImage(){
    var active = $('#modImg .selected');
	var activeT = $('#modList .black');
	
    var next = ($('#modImg .selected').next().length > 0) ? $('#modImg .selected').next() : $('#modImg img:first');
	var nextT = ($('#modList .black').next().length > 0) ? $('#modList .black').next() : $('#modList span:first');
	
    active.fadeOut(function(){
         active.removeClass('selected');
         next.fadeIn().addClass('selected');
		 
     });
		 activeT.removeClass('black');
		 nextT.addClass('black');
}

setInterval(swapImage, 3000);

var aboutTop = $('#aboutContainer').offset().top;

$("#footer").css({"top": aboutTop,});


//canvas


var canToggle = 0;
var height;
var width;

var canvas,ctx,prevX=0,currX=0,prevY=0,currY=0;

//random color generator. Chose 7, so that there are two chances for black.
var colorX = Math.floor((Math.random()*7)+1);
var x;

if(colorX==1){x="black";}
else if(colorX==2){x="green";}
else if(colorX==3){x="blue";}
else if(colorX==4){x="red";}
else if(colorX==5){x="yellow";}
else if(colorX==6){x="orange";}
else(x="black");	


var y=4;
function init()
{
	
		height = $('body').height();
		width = $(document).width(); //changed from "body", to deal with resizing issues
		
		//console.log(width);

		$('#can').attr({"height": height, "width": width});




	canvas=document.getElementById('can');
	ctx=canvas.getContext("2d");
	w=width;
	h=height;

	addEventListener("mousemove",function(e){ findxy('move',e)  },false);

} 
function color(obj)
{
	switch(obj.id)
	{
		case "green" : x="green";break;
		case "blue" : x="blue";break;
		case "red" : x="red";break;
		case "yellow" : x="yellow";break;
		case "orange" : x="orange";break;
		case "black" : x="black";break;
		case "white" : x="white";break;
	}
	y=4;

}
function draw()
{
	ctx.beginPath();
	ctx.lineCap = "round";
	ctx.moveTo(prevX,prevY);
	ctx.lineTo(currX,currY);
	ctx.strokeStyle=x;
	ctx.lineWidth=y;
	ctx.stroke();
	ctx.closePath();
}



function erase()
{
	if(canToggle==0){
		$("#can").attr({height: "0", width: "0"});
		$("#canOff").html("Paint: Off");
		
		canToggle = 1;
	}
	else if(canToggle == 1){
		$("#can").attr({height: height, width: width});
		$("#canOff").html("Paint: On");
		canToggle = 0;
	}
}

var initialXY = 0;
	
function findxy(res,e)
{

	if(res=='move')
	{

		//prevent the drawing from starting at 0,0
		if(initialXY == 0){
			prevX=e.clientX-canvas.offsetLeft+$(window).scrollLeft();
			prevY=e.clientY-canvas.offsetTop+$(window).scrollTop(); 
			initialXY = 1;

		}
		
		else{
			prevX=currX;
			prevY=currY;
		}
		
		currX=e.clientX-canvas.offsetLeft+$(window).scrollLeft();
		currY=e.clientY-canvas.offsetTop+$(window).scrollTop(); 
		
		ctx.beginPath();
		ctx.fillStyle=x;
		ctx.fillRect(currX,currY,2,2);
		ctx.closePath();
		
		draw();

	}
	if(res=='off'){
		//turn drawing off
	}
}

function scrollToFullCasesContainer(){

    $([document.documentElement, document.body]).stop().animate({
        scrollTop: $("#fullCasesContainer").offset().top
    }, 500);    
}

function scrollToTop(speed){

    $([document.documentElement, document.body]).stop().animate({
        scrollTop: $("body").offset().top
    }, speed);   

}


//support the "back" button in modern browsers.
function locationHashChanged() {



    

if (location.hash === "") {
	$("#fullCasesContainer, #exit").fadeOut(function(){
	$("body").ScrollTo(1000);
	$("#fullCasesContainer").html("");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeIn();	
	$("#bottomCover").css({"height": "15px"});		
	});
	
}else if(window.location.hash == "#!/experiments") {
	$("#fullCasesContainer").load("cases/experiments/index.html #fullCase");	
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "15px"});	
	});
	//Check which cases are being viewed
	////logCase("experiments-HashChange");
	
} else if(window.location.hash == "#!/telia") {
	$("#fullCasesContainer").load("cases/telia/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "15px"});	
	});
	//Check which cases are being viewed
	////logCase("telia-HashChange");
	
} else if(window.location.hash == "#!/moderna") {
	$("#fullCasesContainer").load("cases/moderna/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "15px"});	
	});
	//Check which cases are being viewed
	////logCase("moderna-HashChange");
	
} else if(window.location.hash == "#!/megaphone") {
	$("#fullCasesContainer").load("cases/megaphone/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "220px"});	
	});
	//Check which cases are being viewed
	////logCase("megaphone-HashChange");
	
} else if(window.location.hash == "#!/exploringTech") {
	$("#fullCasesContainer").load("cases/exploringTech/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "220px"});	
	});
	//Check which cases are being viewed
	////logCase("exploringTech-HashChange");
	
} else if(window.location.hash == "#!/pingPong") {
	$("#fullCasesContainer").load("cases/pingPong/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "150px"});	
	});
	//Check which cases are being viewed
	////logCase("pingPong-HashChange");
	
} else if(window.location.hash == "#!/webApps") {
	$("#fullCasesContainer").load("cases/webApps/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "150px"});	
	});
	//Check which cases are being viewed
	////logCase("webApps-HashChange");
	
} else if(window.location.hash == "#!/groupDevelopment") {
	$("#fullCasesContainer").load("cases/groupDevelopment/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "170px"});	
	});
	//Check which cases are being viewed
	////logCase("groupDevelopment-HashChange");
	
} else if(window.location.hash == "#!/copy") {
	$("#fullCasesContainer").load("cases/copy/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "200px"});	
	});
	//Check which cases are being viewed
	////logCase("copy-HashChange");
	
} else if(window.location.hash == "#!/rfid") {
	$("#fullCasesContainer").load("cases/rfid/index.html #fullCase");
	$("#case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeOut(function(){
    scrollToFullCasesContainer();
	$("#fullCasesContainer").fadeIn();
	$("#exit").fadeIn();
	drawX();
	$("#bottomCover").css({"height": "200px"});	
	});
	//Check which cases are being viewed
	////logCase("rfid-HashChange");
	
}else {
	//Do nothing
	
	};
        
}


window.onhashchange = locationHashChanged;

   

/*

//this sucks. research why not having it leaves ghosted elements.
$(window).resize(function() {
	window.location="";
});

*/


//var body1 = document.body, html1 = document.documentElement;




//preload all interactive images
var preloadLogo = new Image();
var preloadTelia = new Image();
var preloadRFID = new Image();
var preloadMegaphone = new Image();
var preloadPingPong = new Image();
var preloadGroup = new Image();
var preloadWebApps = new Image();
var preloadTouch = new Image();
var preloadCopy = new Image();

var preloadMail = new Image();
var preloadLinkedIn = new Image();
var preloadTwitter = new Image();

preloadLogo.src = "images/logoW.png";
preloadTelia.src = "cases/telia/telia.png";
preloadRFID.src = "cases/rfid/rfid.png";
preloadMegaphone.src = "cases/megaphone/megaphoneLogo.png";
preloadPingPong.src = "cases/pingPong/pingPong.png";
preloadGroup.src = "cases/groupDevelopment/group.png";
preloadWebApps.src = "cases/webApps/webAppsSmall.png";
preloadTouch.src = "cases/exploringTech/exTech.png";
preloadCopy.src = "cases/copy/copySmall.png";

preloadMail.src = "images/contact/email-W.png";
preloadLinkedIn.src = "images/contact/linkedIn-W.png";
preloadTwitter.src = "images/contact/twitter-W.png";


//experiments quick hack - show/ hide the relevant case.

		
function showExp(event){	

//hide all other content
	//$(".hiddenCont").not("#" + event.target.id).hide(200);
	
	//display or hide this content
	$("#" + event.target.id).next(".hiddenCont").toggle();
	

	//console.log($("#" + event.target.id).next(".hiddenCont").css("display"));
		//if no hidden countent is visible, scroll to top, else scroll to the requested content
		//if ($("#" + event.target.id).next(".hiddenCont").css("display") == "none"){
		if ( $("div.hiddenCont:visible").length === 0){
			$("body").ScrollTo(1000);
		}
		else if ($("#" + event.target.id).next(".hiddenCont").css("display") == "none"){
			//there's another case open, so scroll to it on close of this
			$("#" + event.target.id).prevAll(".expLink").ScrollTo(1000);
	
		}
		else{
			//scroll to it
			$("#" + event.target.id).ScrollTo(1000);
			
		}
	

	
	//if visible, apply hash, if not, remove
	//add these to the hash list
	
	//location.hash = '#!/experiments/' + event.target.id;
};