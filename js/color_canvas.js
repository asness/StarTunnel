function rgbColorStr(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function setRGBFillColor(ctx, r, g, b) {
    ctx.fillStyle = rgbColorStr(r, g, b);
}

function setWhiteFillColor(ctx) {
    setRGBFillColor(ctx, 255, 255, 255);
}

function multiplyByColor(ctx, canvas, r, g, b) {
    ctx.globalCompositeOperation = "multiply";
    setRGBFillColor(ctx, r, g, b);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function showLayer(bool) {
    return bool? 255: 0;
}