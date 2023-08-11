canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/
beginPath();
lineWidth = 1;
rect(150, 143);
ctx._______;
ctx._______ = "grey";
ctx._______ = 1;
ctx._______(x, y, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/
beginPath()
ctx._______;
ctx._______ = "blue";
ctx._______ = 5;
ctx._______(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
beginPath()
ctx._______;
ctx._______ = "black";
ctx._______ = 5;
ctx._______(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();
// Similarly, create a red circle with position 210 and 40
beginPath()
ctx._______;
ctx._______ = "red";
ctx._______ = 5;
ctx._______(210, 40, 40, 0, 2*Math.PI);
ctx.stroke();
// Similarly, create an orange circle with position 300 and 250
beginPath()
ctx._______;
ctx._______ = "orange";
ctx._______ = 5;
ctx._______(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();
// Similarly, create a green circle with position 400 and 250
beginPath()
ctx._______;
ctx._______ = "green";
ctx._______ = 5;
ctx._______(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();