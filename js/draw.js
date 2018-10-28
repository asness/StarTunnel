function draw(stars) {
    var layerAngleOffsets = stars.layerRandomAngleOffsets.slice(0, stars.starLayers);
    var tunnels = makeStarTunnelLayers(stars.starPoints, stars.starStep, stars.xOffset, stars.yOffset,
                                       stars.centerStarRadius, stars.centerStarAngle,
                                       stars.starsPerLayer, stars.starMagnifyFactor, layerAngleOffsets);
    var colorMatrix = [
        stars.redSrc_redDest,   stars.greenSrc_redDest,   stars.blueSrc_redDest,   stars.redOffset,
        stars.redSrc_greenDest, stars.greenSrc_greenDest, stars.blueSrc_greenDest, stars.greenOffset,
        stars.redSrc_blueDest,  stars.greenSrc_blueDest,  stars.blueSrc_blueDest,  stars.blueOffset,
    ];

    clearContext(stars.ctx, stars.canvas);
    drawStarTunnelLayers(stars.ctx, tunnels);
    if (stars.colorMatrixOn) {
        colorMatrixImage(stars.ctx, stars.canvas, colorMatrix);
    }
    multiplyByColor(stars.ctx,
                    stars.canvas,
                    showLayer(stars.showRed),
                    showLayer(stars.showGreen),
                    showLayer(stars.showBlue));    
}