function colorVector(c, vec) {
    return c[0] * vec[0] + c[1] * vec[1] + c[2] * vec[2] + 255 * vec[3];
}

function rgbColorMatrix(c, mat) {
    var r = colorVector(c, mat.slice(0, 4));
    var g = colorVector(c, mat.slice(4, 8));
    var b = colorVector(c, mat.slice(8, 12));
    return [r, g, b];
}