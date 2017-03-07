setInterval(function combFAnim(){
	var x = document.getElementById("firstCombId");
	var lefT = randomInt(150,250);
	var toP = randomInt(200,400);
	x.style.left=lefT+"px";
	x.style.top=toP+"px";
	x.style.transform="rotate("+randomInt(0,360)+"deg)";
	x.style.width=randomInt(50,200)+"px";
},3000);
function randomInt(min,max){
	return Math.floor(Math.random()*max+min);
}
var starAnim = {};
starAnim.secRotatI=document.getElementById("secondSecFirstCombId");
starAnim.degg = 0;
starAnim.animRot_I = function(x){
	starAnim.secRotatI.style.transform="rotate("+x+"deg)";
	starAnim.secRotatI.style.WebkitTransform="rotate("+x+"deg)";
};
starAnim.rotatI = function(){
	
		starAnim.degg += 20;
		starAnim.animRot_I(starAnim.degg);
	
};
starAnim.rotatD = function(){
	if(starAnim.degg == 0){
		clearInterval();
	}else{
		starAnim.degg--;
		starAnim.animRot_I(starAnim.degg);
	}
};
starAnim.intrv = setInterval(starAnim.rotatI,400);