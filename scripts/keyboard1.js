var wW = $(window).width(),
	wH = $(window).height();

var objectW = $("#object1").width(),
	objectH = $("#object1").height();


var position = [];
position[0] = (wW-objectW)/2;
position[1] = (wH-objectH)/2;

$("#object1").css({"left":position[0]+"px","top":position[1]+"px"});

$(document).jkey('space', function(e) {
	if($("#object1").hasClass("circle")){
		$("#object1").removeClass("circle").addClass("sphere");
	}else{
		$("#object1").removeClass("sphere").addClass("circle");
	}
	
});

$(document).jkey('left', function(e) {
	position[0]-=1;
	$("#object1").css({"left":position[0]+"px","top":position[1]+"px"});
});
$(document).jkey('right', function(e) {
	position[0]+=1;
	$("#object1").css({"left":position[0]+"px","top":position[1]+"px"});
});
$(document).jkey('up', function(e) {
	position[1]-=1;
	$("#object1").css({"left":position[0]+"px","top":position[1]+"px"});
});
$(document).jkey('down', function(e) {
	position[1]+=1;
	$("#object1").css({"left":position[0]+"px","top":position[1]+"px"});
});