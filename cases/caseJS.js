
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




//draw the gif "X"
cX=document.getElementById("exit");
ctxX=cX.getContext("2d");
ctxX.strokeStyle="#000";
ctxX.lineWidth=4;
//X
		ctxX.moveTo(5,5);
		ctxX.lineTo(29,29);
		ctxX.moveTo(29,5);
		ctxX.lineTo(5,29);

		ctxX.stroke();

//submit the form
$("#exit").click(function () {
	$("#contents").ScrollTo(1000);
	$("#casesContainer").fadeOut(function(){;
	$("##case1, #case2, #case3, #case4, #case5, #case6, #case7, #case8, #case9").fadeIn().html(case1);
	location.hash = '';
	});
});
