let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const pi = Math.PI;
let k = 2 * pi / 100;
let x = 0;
let max = 100;
let timer;

draw();
function draw() {
    let color = changeColor(x);
    ctx.clearRect(0, 0, 250, 250);
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, x * k, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
   // console.log(ctx);
    ctx.stroke();
    ctx.closePath();
    x++;

    ctx.beginPath();
    ctx.font = 'bold 70px Arial';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(x+'%',125,145);
    ctx.closePath();

    if (x < max) {
        timer = setTimeout(draw, 50);
    } else
        clearTimeout(timer);

}

function changeColor(x){
 x = x*250/100;
 y = 255-x;
 let color = 'rgb('+x+','+y+',0)';
 return color;
}