var Stars = function() {
    // canvas
    this.canvas = document.getElementById("star-tunnel");
    this.ctx = this.canvas.getContext("2d");


    this.resetLayerRandomAngleOffsets = function() {
        this.layerRandomAngleOffsets = randomArray(32, Math.PI / 32);
    }

    this.resetLayerRandomAngleOffsets();

    // drawing parameters
    this.starPoints = 5;
    this.starStep = 2; // should be relatively prime to starPoints
    this.xOffset = 1/2;
    this.yOffset = 1/2;
    this.centerStarRadius = 50;
    this.centerStarAngle = 0;

    this.starsPerLayer = 12;
    this.starMagnifyFactor = 1.1;
    this.starLayers = 2;

    this.colorMatrixOn = true;

    this.redSrc_redDest = 1;
    this.greenSrc_redDest = -0.5;
    this.blueSrc_redDest = 0;
    this.redOffset = 0;

    this.redSrc_greenDest = -0.5;
    this.greenSrc_greenDest = 1;
    this.blueSrc_greenDest = 0;
    this.greenOffset = 0;

    this.redSrc_blueDest = 0;
    this.greenSrc_blueDest = 0;
    this.blueSrc_blueDest = 1;
    this.blueOffset = 0.5;

    this.showRed = true;
    this.showGreen = true;
    this.showBlue = true;
}