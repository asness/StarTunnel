function grayscalePixelFunc(data) {
    for (var i = 0; i < data.length; i += 4) {
        var avg = (data[i] + data[i+1] + data[i+2]) / 3;
        data[i] = avg;   // r
        data[i+1] = avg; // g
        data[i+2] = avg; // b
    }
}

function rgbMatrixFunc(data, mat) {
    var n = 0;
    for (var i = 0; i < data.length; i += 4) {
        var oldRGB = [data[i], data[i+1], data[i+2]];
        var newRGB = rgbColorMatrix(oldRGB, mat);

        data[i] = newRGB[0];   // r
        data[i+1] = newRGB[1]; // g
        data[i+2] = newRGB[2]; // b
    }
}

function applyPixelFunctionToImage(ctx, canvas, pixelFunc) {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    pixelFunc(data);
    ctx.putImageData(imageData, 0, 0);    
}

function grayscaleImage(ctx, canvas) {
    applyPixelFunctionToImage(ctx, canvas, grayscalePixelFunc);
}

function colorMatrixImage(ctx, canvas, mat) {
    applyPixelFunctionToImage(ctx, canvas, function(data) {rgbMatrixFunc(data, mat)})
}