$(document).ready(function(){
  //contact page oval height
  $('.contact-info-md-lg').css("height", $('.contact-info-md-lg').width()*0.6);
  $('.contact-info-xs').css("height", $('.contact-info-xs').width()*0.6);

  //expandable menu for xs sm devices
  $(".menu-xs").click(function(){
    $(".button-xs").toggle();
  });
});

$(function(){
	function printnum(abc){
  		$(".preload").append(abc);
  	}
  	window.printnum=printnum;

  	var imgArray = [];
	var imgnumArray = [];
	var num=0;

  	function initialImgArray(name, count){
		for (i=1; i<=count; i++){
			imgArray[i-1] = "img/" + name + i + ".jpg";
			imgnumArray[i-1] = "img/" + name + "num" + i +".jpg";
		}
	}
	window.initialImgArray=initialImgArray;

	// testing function
	function printImgArray(count){
		for (i=0; i<count; i++){
			$(".preload").append(imgArray[i]);
			$(".preload").append(imgnumArray[i]);
		}
	}
	window.printImgArray=printImgArray;

	function leftClick(count){
		num--;
		if (num == 0) {
			$("#left").attr("src","img/portfolio-arrow-left-black.jpg");
		}
		if (num == -1) {
			num = count-1;
			$("#left").attr("src","img/portfolio-arrow-left.jpg");
			$("#right").attr("src","img/portfolio-arrow-right-black.jpg");
		}
		if (num == count-2) {
			$("#right").attr("src","img/portfolio-arrow-right.jpg");
		}
		$("#img").fadeTo("slow", 0, function() {
			$(this).attr("src",imgArray[num]).fadeTo("slow",1);
		});
		$("#num").attr("src",imgnumArray[num]).fadeTo("slow",1);
	}
	window.leftClick=leftClick;

	function rightClick(count){
		num++;
		if (num == 1) {
			$("#left").attr("src","img/portfolio-arrow-left.jpg");	
		}
		if (num == count-1) {
			$("#right").attr("src","img/portfolio-arrow-right-black.jpg");	
		}
		if (num == count) {
			num = 0;
			$("#right").attr("src","img/portfolio-arrow-right.jpg");
			$("#left").attr("src","img/portfolio-arrow-left-black.jpg");	
		}
		$("#img").fadeTo("slow", 0, function() {
			$(this).attr("src",imgArray[num]).fadeTo("slow",1);
		});
		$("#num").attr("src",imgnumArray[num]).fadeTo("slow",1);
	}
	window.rightClick=rightClick;

	function preload() {
	    $(imgArray).each(function(){
	        (new Image()).src = this;
    	});
	}
	window.preload=preload;
});
