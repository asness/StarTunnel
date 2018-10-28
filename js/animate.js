function animate(stars, lastStars) {
    if (paramChanged(stars, lastStars) || windowSizeChanged) {
        console.log("drawing");
        draw(stars);
        copyParams(stars, lastStars);
        windowSizeChanged = false;
    }
    requestAnimationFrame(function() {animate(stars, lastStars)});
}