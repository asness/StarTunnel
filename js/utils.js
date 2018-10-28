function randomArray(n, scale) {
    var arr = new Array();
    for (var i = 0; i < n; i++) {
        arr.push(scale * Math.random());
    }
    return arr;
}