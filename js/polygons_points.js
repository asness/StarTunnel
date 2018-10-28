function makeStarPts(starPoints, starStep, xOffset, yOffset, radius, phase) {
    var angle = function(i) {
        return (i*starStep*2*Math.PI/starPoints + phase) % (2*Math.PI);
    }
    var pgPts = new Array();
    for (var i = 0; i < starPoints; i++) {
        var theta = angle(i);
        var pt = {};
        pt.x = radius * Math.cos(theta) + xOffset * window.innerWidth;
        pt.y = radius * Math.sin(theta) + yOffset * window.innerHeight;
        pgPts.push(pt);
    }
    return pgPts;
}

function makeStarTunnel(starPoints, starStep, xOffset, yOffset, centerStarRadius, centerStarAngle,
                        starsPerLayer, starMagnifyFactor, phaseStep) {
    var stars = new Array();
    for (var i = 0; i < starsPerLayer; i++) {
        var radius = centerStarRadius * Math.pow(starMagnifyFactor, i);
        var phase = centerStarAngle + i * phaseStep;
        var starPts = makeStarPts(starPoints, starStep, xOffset, yOffset, radius, phase);
        stars.push(starPts);
    }
    return stars;
}

function makeStarTunnelLayers(starPoints, starStep, xOffset, yOffset, centerStarRadius, centerStarAngle,
                              starsPerLayer, starMagnifyFactor, layerPhaseSteps) {
    // layerPhaseSteps should be divisible by 3
    var layers = new Array();
    for (i = 0; i < layerPhaseSteps.length; i++) {
        layers.push(makeStarTunnel(starPoints, starStep, xOffset, yOffset, centerStarRadius, centerStarAngle,
                                   starsPerLayer, starMagnifyFactor, layerPhaseSteps[i]));
    }
    return layers;
}