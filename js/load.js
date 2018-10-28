window.onload = function() {
    var canvas = document.getElementById("star-tunnel");
    var ctx = canvas.getContext("2d");

    var s = new Stars();

    var gui = new dat.GUI({
        load: guiPresets,
        preset: "Preset 1"
    });
    gui.remember(s);

    var shapeFolder = gui.addFolder("Shapes");

    var starFolder = shapeFolder.addFolder("Star");
    starFolder.add(s, "xOffset", 0, 1);
    starFolder.add(s, "yOffset", 0, 1);
    starFolder.add(s, "starPoints", 3, 17).step(1);
    starFolder.add(s, "starStep", 1, 16).step(1);
    starFolder.add(s, "centerStarRadius", 1, 100).step(1);
    starFolder.add(s, "centerStarAngle", 0, 2 * Math.PI);

    var layersFolder = shapeFolder.addFolder("Layers");
    layersFolder.add(s, "starMagnifyFactor", 1, 4);
    layersFolder.add(s, "starsPerLayer", 1, 100).step(1);
    layersFolder.add(s, "starLayers", 1, 32).step(1);
    layersFolder.add(s, "resetLayerRandomAngleOffsets");

    var colorFolder = gui.addFolder("Colors");

    var filtersFolder = colorFolder.addFolder("Filters");
    filtersFolder.add(s, "showRed");
    filtersFolder.add(s, "showGreen");
    filtersFolder.add(s, "showBlue");
    filtersFolder.add(s, "colorMatrixOn");

    var matrixFolder = colorFolder.addFolder("Color Matrix");
    matrixFolder.add(s, "redSrc_redDest", -1, 1);
    matrixFolder.add(s, "greenSrc_redDest", -1, 1);
    matrixFolder.add(s, "blueSrc_redDest", -1, 1);
    matrixFolder.add(s, "redOffset", -1, 1);

    matrixFolder.add(s, "redSrc_greenDest", -1, 1);
    matrixFolder.add(s, "greenSrc_greenDest", -1, 1);
    matrixFolder.add(s, "blueSrc_greenDest", -1, 1);
    matrixFolder.add(s, "greenOffset", -1, 1);

    matrixFolder.add(s, "redSrc_blueDest", -1, 1);
    matrixFolder.add(s, "greenSrc_blueDest", -1, 1);
    matrixFolder.add(s, "blueSrc_blueDest", -1, 1);
    matrixFolder.add(s, "blueOffset", -1, 1);


    var l = new Stars();
    l.starsPerLayer = 0;
    
    animate(s, l);
}