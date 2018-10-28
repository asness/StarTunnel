function blendColorCoordWithGray(colorCoord, grayLightness, saturation) {
	return colorCoord * saturation + grayLightness * (1 - saturation);
}

function blendWithGray(color, grayLightness, saturation) {
	var newColor = new Array();
	for (var i = 0; i < 3; i++) {
		newColor.push(blendColorCoordWithGray(color[i], grayLightness, saturation));
	}
	return newColor;
}

function hslColor(hue, saturation, lightness) {
    var h = hue % 1 * 3;
    var s = saturation;
    var l = lightness * 3;
	var c;
	
    if (l == 0) {
        c = [0, 0, 0, a];
	} else if (l > 0 && l <= 1) {
		if (h <= 1) {
            h = h * l;
            c = [h, l-h, 0];
		} else if (h > 1 && h < 2) {
            h = (h-1) * l;
            c = [l-h, 0, h];
		} else if (h >= 2) {
            h = (h-2) * l;
            c = [0, h, l-h];
		}

	} else if (l > 1 && l < 2) {
		// relative length of the hexagon edge that lengthens as l increases
        var rem = l - 1;
		// length of the hexagon edge that shortens as l increases
        var length = (2-l) / rem;
		// scale
        var scale = rem + length;
        if (h <= rem / scale) {
            h = h * scale / rem;
            c = [h * rem, 1, rem - h * rem];
		}
        else if (h > rem / scale && h <= 1) {
            h = (h - rem / scale) * scale / (scale - rem);
            c = [rem * (1 - h) + h, 1 - h + h * rem, 0];
		}
        else if (h > 1 && h <= (rem / scale + 1)) {
            h = (h - 1) * scale / rem;
            c = [1, rem - (h * rem), h * rem];
		}
        else if (h > rem / scale + 1 && h <= 2) {
            h = (h - 1 - rem / scale) * scale / (scale - rem);
            c = [1 - h + h * rem, 0, rem * (1 - h) + h];
		}
        else if (h > 2 && h <= rem / scale + 2) {
            h = (h - 2) * scale / rem;
            c = [rem - h * rem, h * rem, 1];
		}
        else if (h > rem / scale + 2) {
            h = (h - 2 - rem / scale) * scale / (scale - rem);
            c = [0, rem * (1 - h) + h, 1 - h + h * rem];
		}
	} else if (l >= 2) {
        if (h <= 1) {
            h = h * (3 - l) + l - 2;
            c = [h, 1, l - 1 - h];
		}
        else if (h > 1 && h < 2) {
            h = (h - 1) * (3 - l) + l - 2;
            c = [1, l - 1 - h, h];
		}
        else if (h >= 2) {
            h = (h - 2) * (3 - l) + l - 2;
            c = [l - 1 - h, h, 1];
		}
	}

	return blendWithGray(c, lightness, saturation);
}

function floatColorToIntColor(c) {
    intColor = new Array();
    for (var i = 0; i < c.length; i++) {
        var coord = Math.min(255, Math.floor(256 * c[i]));
        intColor.push(coord);
    }
    return intColor;
}

function colorsThatSumToWhite(numColors) {
    var colors = new Array();
    for (var i = 0; i < numColors; i++) {
        var c = hslColor(i/numColors, 1, 1/numColors);
        colors.push(floatColorToIntColor(c));
    }
    return colors;
}