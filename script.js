var my_canvas = document.getElementById('canvas'),
ctx = my_canvas.getContext("2d");
const star = document.getElementById("star");
const fart = document.getElementById("fart");
const frog = document.getElementById("frog");
const frog_laying = document.getElementById("frog_laying");


x=180
y=400
c=frog
setInterval(()=>{
  ctx.clearRect(0,0,500,500);
	ctx.drawImage(c, x,y,100,100);


}, 10);

window.onkeydown=(event)=>{
  if(event.key=="ArrowRight"){
    x=x+20
    y=360
    setTimeout(()=>y=400,300)
  }
  if(event.key=="ArrowLeft"){
    x=x-20
    y=360
    setTimeout(()=>y=400,300)
  } 
  if(event.key=="ArrowUp"){
    
    setTimeout(()=>y=350,50)
    setTimeout(()=>y=300,100)
    setTimeout(()=>y=250,150)
    setTimeout(()=>y=200,200)
    setTimeout(()=>y=150,250)
    setTimeout(()=>y=200,300)
    setTimeout(()=>y=250,350)
    setTimeout(()=>y=300,400)
    setTimeout(()=>y=350,450)
    setTimeout(()=>y=400,500)
  } 
  if(event.key=="ArrowDown"){
    if(c==frog){
      c=frog_laying

    } else{
      c=frog
    }
  }
};

