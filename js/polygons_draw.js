function drawPath(ctx, pts) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (var i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
    }
    ctx.closePath();
}

function drawStar(ctx, pts) {
    setWhiteFillColor(ctx);
    drawPath(ctx, pts);
    ctx.fill();
}

function drawStarTunnel(ctx, stars) {
    ctx.globalCompositeOperation = "difference";
    for (var i = 0; i < stars.length; i++) {
        drawStar(ctx, stars[i]);
    }
}

function drawStarTunnelLayers(ctx, tunnels) {
    var numLayers = tunnels.length;
    var colors = colorsThatSumToWhite(numLayers);
    var tempCanvas = document.getElementById("temp");
    var tempCtx = tempCanvas.getContext("2d");

    for (var i = 0; i < numLayers; i++) {
        // draw each layer onto a temporary canvas,
        // then copy to the main canvas
        var c = colors[i];
        clearContext(tempCtx, tempCanvas);
        drawStarTunnel(tempCtx, tunnels[i]);
        multiplyByColor(tempCtx, tempCanvas, c[0], c[1], c[2]);
        addCanvasToContext(tempCanvas, ctx);
    }
}

function drawTestRectangle(ctx) {
    setWhiteFillColor(ctx);
    ctx.fillRect(0, 0, 100, 100);
}