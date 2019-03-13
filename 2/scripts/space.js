var wW = $(window).width(),
	wH = $(window).height();

var objectW = $("#object1").width(),
	objectH = $("#object1").height();


var position = [];
position[0] = (wW-objectW)/2;
position[1] = (wH-objectH)/2;

var status = 0;

$("#object1").css({"left":position[0]+"px","top":position[1]+"px"});

$(document).jkey('space', function() {
	if(status == 0){
		$("#container").append("<div id = 'object2' class = 'dot object'></div><div id = 'object3' class = 'line object'></div>")
		position[2] = position[0]+$("#object2").width()/2;
		position[3] = position[1]+$("#object2").height()/2;
		$("#object2").css({"left":position[0]+"px","top":position[1]+"px"});
		$("#object3").css({"left":position[2]+"px","top":position[3]+"px"});
		$("#object2").animate({"top":position[1]+100+"px"},500);
		$("#object3").animate({"height":100+"px"},500);
		status = 1;
	}else if (status == 1){
		$("#container").append("<div id = 'object4' class = 'dot object'></div><div id = 'object5' class = 'dot object'></div>")
		position[4] = position[0]+100;
		position[6] = position[2]+100;
		$("#object4").css({"left":position[0]+"px","top":position[1]+"px"});
		$("#object5").css({"left":position[0]+"px","top":position[1]+100+"px"});
		$("#object4").animate({"left":position[0]+100+"px"},500);
		$("#object5").animate({"left":position[0]+100+"px"},500);
		$("#object3").animate({"width":100+"px"},500);
		status = 2;
	}else if (status == 2){
		for(i = 0;i<5;i++){
			setTimeout(addingPlane(position[0]+(i+1)*20,position[1]+(i+1)*20),3000);
		}
		status = 3;
	}else if (status == 3){
		var myWindow = window.open("space.html","_blank", "Space", "width=500,height=500");
		myWindow();
		status = 0;
	}

});
function addingPlane(o1, o2){
	console.log("ww");
	$("#container").append("<div class = 'plane object' style = 'top:"+o2+"px; left:"+o1+"px'></div>");

	$("#container").append("<div class = 'dot object' style = 'top:"+o2+"px;left:"+o1+"px'></div><div class = 'dot object' style = 'top:"+o2+"px;left:"+(o1+100)+"px'></div><div class = 'dot object' style = 'top:"+(o2+100)+"px;left:"+o1+"px'></div><div class = 'dot object' style = 'top:"+(o2+100)+"px;left:"+(o1+100)+"px'></div>");
}
