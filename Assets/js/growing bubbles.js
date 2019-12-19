var canvas = document.querySelector('canvas');
console.log(canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');

/*
c.fillStyle="rgba(255,0,0,0.7)";
c.fillRect(100,100,100,100);
c.fillStyle="rgba(0,255,0,0.7)";
c.fillRect(300,300,100,100);
c.fillStyle="rgba(255,0,255,0.7)";
c.fillRect(400,100,100,100);

//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle="#fa34a3";
c.stroke();

//arc/circle
c.beginPath();
c.arc(300,300,30,0,Math.PI*2,false);
c.strokeStyle="blue";
c.fillStyle="yellow";
c.stroke();

for(var i=0;i<100;i++){
	var x = Math.random()*window.innerWidth;
	var y = Math.random()*window.innerHeight;
	c.beginPath();
c.arc(x,y,30,0,Math.PI*2,false);
c.strokeStyle="blue";
c.fillStyle="yellow";
c.stroke();
}
*/
//arc/circle
var mouse={
	x:undefined,y:undefined
}
var maxRadius=40;
//var minRadius=4;
var colorArray=['#d9d900','#d90000','#00d936','#d900a3','#5900b3'];
window.addEventListener('mousemove',function(event){
	mouse.x=event.x;
	mouse.y=event.y;
})
window.addEventListener('resize',function(){
	canvas.width=window.innerWidth-12;
	canvas.height=window.innerHeight-7;
	init();
});
function Circle(x,y,dx,dy,radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)]
	
	this.draw=function(){
		
	c.beginPath();
c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
c.fillStyle=this.color;
c.fill();
	}
	this.update=function(){
		if(this.x+this.radius>innerWidth || this.x-this.radius<0){
	this.dx=-this.dx;
}
if(this.y+this.radius>innerHeight || this.y-this.radius<0){
	this.dy=-this.dy;
}
this.x+=this.dx;
this.y+=this.dy;

//interaction
if(mouse.x-this.x<50 && mouse.x-this.x>-50
&& mouse.y-this.y<50&&mouse.y-this.y>-50){
	if(this.radius<maxRadius){
		this.radius+=1;
	}
}else if(this.radius>this.minRadius){
	this.radius-=1;
}
	this.draw();
	}
}

var circleArrey=[];
function init(){
	circleArrey=[];
for (var i=0;i<1000;i++){
var radius=Math.random()*3+1; 
var x = Math.random()*(innerWidth-radius*2)+radius;
var y = Math.random()*(innerHeight-radius*2)+radius;
var dx = (Math.random()-0.5);
var dy = (Math.random()-0.5);

	circleArrey.push(new Circle(x,y,dx,dy,radius));
}
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	for(var i=0;i<circleArrey.length;i++){
		circleArrey[i].update();
	}
}
init();
animate();








