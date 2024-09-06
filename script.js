window.onload=function() {
	const urlParams = new URLSearchParams(window.location.search);
	const major = parselnt(urlParams.get('major'));
	const minor = parselnt(urlParams.get('minor'));
	
	//display the parameters on the page
	document.getElementById('major-axis').innerText=major;
	document.getElementById('minor-axis').innerText=minor;
	
	//draw the ellipse using canvas
	const canvas = document.getElementById('ellipseCanvas');
	const ctx = canvas.getContext('2d');
	
	//clear the canvas
	ctx.xlearRect(0,0,canvas.wdith,canvas.height);
	
	//draw the eliipse manually using Bezier curves
	ctx.beginPath();
	ctx.moveTo(250 + major, 150);	//starting point(right edge of ellipse)
	
	//manually draw the ellipse using Bezier curves (workaround)
	ctx.bezierCurveTo(250 + major, 150 - minor, 250 - major, 150- minor, 250 - major,150);
	ctx.bezierCurveTo(250 - major, 150 + minor, 250 + major, 150+ minor, 250 + major,150);
	ctx.stroke();
}