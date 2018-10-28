var windowSizeChanged;

initializeRedraw();

function initializeRedraw() {
    window.addEventListener('resize', resizeCanvases, false);
    resizeCanvases();
}

function resizeCanvases() {
    starTunnelCanvas = document.getElementById('star-tunnel'),
    tempCanvas = document.getElementById('temp'),

    starTunnelCanvas.width = window.innerWidth;
    starTunnelCanvas.height = window.innerHeight;
    tempCanvas.width = window.innerWidth;
    tempCanvas.height = window.innerHeight;

    windowSizeChanged = true;
}