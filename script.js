setInterval(function(){
let d=new Date();
let hour=d.getHours();
let min=d.getMinutes();
let sec=d.getSeconds();
console.log(hour);
let hourrotat=30*hour+min/2;
let minrotat=6*min;
let secrotat=6*sec;

let thour=document.getElementById("hour");
let tmin=document.getElementById("min");
let tsec=document.getElementById("sec");
thour.style.transform=`rotate(${hourrotat}deg)`;
tmin.style.transform=`rotate(${minrotat}deg)`;
tsec.style.transform=`rotate(${secrotat}deg)`;
},1);