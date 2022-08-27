
function startPainting(e)
{
	painting=true;
	draw(e);
}

function stopPainting()
{
	painting=false;
	ctx.beginPath();
}

function draw(e)
{
	if(!painting) return

	ctx.lineWidth=10;
	ctx.lineCap='round';
	ctx.lineTo(e.clientX,e.clientY);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(e.clientX,e.clientY);
}


function tocuchdraw(e)
{
	if(!painting) return

	ctx.lineWidth=10;
	ctx.lineCap='round';
	ctx.lineTo(e.touches[0],e.touches[0]);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(e.touches[0],e.touches[0]);
}
let canvas=document.getElementById("canva");

	let ctx=canvas.getContext("2d");
	let painting=false;


	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

	canvas.addEventListener("touchstart",startPainting);
	canvas.addEventListener("mousedown",startPainting);

	canvas.addEventListener("mouseup",stopPainting);
	canvas.addEventListener("touchend",stopPainting);
	
	canvas.addEventListener("mousemove",draw);
	canvas.addEventListener("touchmove",touchdraw);

document.getElementById("btn").onclick=(e)=>
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
}
