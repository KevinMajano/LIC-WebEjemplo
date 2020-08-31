setInterval(function(){
var canvas = document.getElementById("reloj");
var ctx = canvas.getContext("2d");
var radio = canvas.width/2;

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(radio,radio,radio,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(radio,radio,3,0,2*Math.PI);
ctx.fill();

//NUMEROS
ctx.font = radio/10 + "px arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
for (var i = 0; i < 12; i++) {
    ctx.fillText(i,radio+radio*0.9*Math.sin(i*2*Math.PI/12),radio-(radio*0.9*Math.cos(i*2*Math.PI/12)));
}

//OBTENER HORA
var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var horatotal = h%12+m/60+s/3600;
var angH = horatotal * 2*Math.PI/12;
var angM = m * 2 *Math.PI/60;
var angS = s * 2 *Math.PI/60;

//Dibujar manesillas
ctx.strokeStyle = "white";
ctx.moveTo(radio,radio);
ctx.lineTo(radio+radio*0.5*Math.sin(angH),radio-(radio*0.6*Math.cos(angH)));
ctx.lineWidth = 5;
ctx.stroke();

ctx.strokeStyle = "white";
ctx.moveTo(radio,radio);
ctx.lineTo(radio+radio*0.7*Math.sin(angM),radio-(radio*0.6*Math.cos(angM)));
ctx.lineWidth = 3;
ctx.stroke();

ctx.strokeStyle = "white";
ctx.moveTo(radio,radio);
ctx.lineTo(radio+radio*0.9*Math.sin(angS),radio-(radio*0.6*Math.cos(angS)));
ctx.lineWidth = 1;
ctx.stroke();

},1000);
