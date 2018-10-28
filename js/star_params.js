var geometryParams = ["layerRandomAngleOffsets",
                      "starPoints", "starStep", "xOffset", "yOffset", "centerStarRadius",
                      "centerStarAngle", "starsPerLayer", "starMagnifyFactor", "starLayers", "colorMatrix"];

var colorParams = ["colorMatrixOn",
                   "redSrc_redDest",   "greenSrc_redDest",   "blueSrc_redDest",   "redOffset",
                   "redSrc_greenDest", "greenSrc_greenDest", "blueSrc_greenDest", "greenOffset",
                   "redSrc_blueDest",  "blueSrc_greenDest",  "blueSrc_blueDest",  "blueOffset",
                   "showRed", "showGreen", "showBlue"];

var params = geometryParams.concat(colorParams);

function paramChanged(stars, lastStars) {
    for (var i = 0; i < params.length; i++) {
        var p = params[i];
        if (stars[p] != lastStars[p]) {
            return true;
        }
    }
    return false;
}

function copyParams(starsA, starsB) {
    for (var i = 0; i < params.length; i++) {
        var p = params[i];
        if (starsA[p] != starsB[p]) {
            starsB[p] = starsA[p];
        }
    }
}