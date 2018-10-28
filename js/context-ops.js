function addCanvasToContext(canvas, context) {
    context.globalCompositeOperation = "lighter";
    context.drawImage(canvas, 0, 0);
}

function clearContext(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}