describe('RGBA Color Parsing and Blending', function(){
	beforeEach(function() {
	  this.addMatchers({
		toRoughlyEqual: function(expected){
			return isNaN(this.actual) == isNaN(expected) && Math.abs(expected - this.actual) <= 2;
		}
	  });
	});
    function blendColors(bg, c){
        return Color.rgb(
            ((c.red - bg.red) * c.alpha) + bg.red,
            ((c.green - bg.green) * c.alpha) + bg.green,
            ((c.blue - bg.blue) * c.alpha) + bg.blue,
            bg.alpha
        );
    }
    function expectEqualColors(c, c2){
        expect(c.red).toRoughlyEqual(c2.red);
        expect(c.green).toRoughlyEqual(c2.green);
        expect(c.blue).toRoughlyEqual(c2.blue);
        expect(c.alpha).toEqual(c2.alpha);
    }
    function equalColorsOnBackground(bgcolor){
        var colors = Array.prototype.slice.call(arguments, 1);
        it('should blend the colors ' + colors.join(', ') + ' to equivalent results on top of ' + bgcolor, function(){
            var c = blendColors(bgcolor, new Color(colors[0]));
            for (var i = 1, l = colors.length; i < l; i++){
                expectEqualColors(c, blendColors(bgcolor, new Color(colors[i])));
            }
        });
        it('should parse the color ' + colors[0] + ' equivalently after being serialized as HEX', function(){
            var c = new Color(colors[0]);
            expectEqualColors(c, new Color(c.toHEX()));
        });
        it('should parse the color ' + colors[0] + ' equivalently after being serialized as RGB', function(){
            var c = new Color(colors[0]);
            expectEqualColors(c, new Color(c.toRGB()));
        });
        it('should parse the color ' + colors[0] + ' equivalently after being serialized as HSB', function(){
            var c = new Color(colors[0]);
            expectEqualColors(c, new Color(c.toHSB()));
        });
        it('should parse the color ' + colors[0] + ' equivalently after being serialized as HSL', function(){
            var c = new Color(colors[0]);
            expectEqualColors(c, new Color(c.toHSL()));
        });
    }
    equalColorsOnBackground('black', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)');
    equalColorsOnBackground('black', 'rgba(204, 0, 0, 1.0)', 'rgba(80%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 0.8)', 'rgba(100%, 0%, 0%, 0.8)');
    equalColorsOnBackground('black', 'rgba(153, 0, 0, 1.0)', 'rgba(60%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 0.6)', 'rgba(100%, 0%, 0%, 0.6)');
    equalColorsOnBackground('black', 'rgba(102, 0, 0, 1.0)', 'rgba(40%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 0.4)', 'rgba(100%, 0%, 0%, 0.4)');
    equalColorsOnBackground('black', 'rgba(51, 0, 0, 1.0)', 'rgba(20%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 0.2)', 'rgba(100%, 0%, 0%, 0.2)');
    equalColorsOnBackground('black', 'rgba(0, 0, 0, 1.0)', 'rgba(0%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 0.0)', 'rgba(100%, 0%, 0%, 0.0)');
    equalColorsOnBackground('white', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)');
    equalColorsOnBackground('white', 'rgba(255, 51, 51, 1.0)', 'rgba(100%, 20%, 20%, 1.0)', 'rgba(255, 0, 0, 0.8)', 'rgba(100%, 0%, 0%, 0.8)');
    equalColorsOnBackground('white', 'rgba(255, 102, 102, 1.0)', 'rgba(100%, 40%, 40%, 1.0)', 'rgba(255, 0, 0, 0.6)', 'rgba(100%, 0%, 0%, 0.6)');
    equalColorsOnBackground('white', 'rgba(255, 153, 153, 1.0)', 'rgba(100%, 60%, 60%, 1.0)', 'rgba(255, 0, 0, 0.4)', 'rgba(100%, 0%, 0%, 0.4)');
    equalColorsOnBackground('white', 'rgba(255, 204, 204, 1.0)', 'rgba(100%, 80%, 80%, 1.0)', 'rgba(255, 0, 0, 0.2)', 'rgba(100%, 0%, 0%, 0.2)');
    equalColorsOnBackground('white', 'rgba(255, 255, 255, 1.0)', 'rgba(100%, 100%, 100%, 1.0)', 'rgba(255, 0, 0, 0.0)', 'rgba(100%, 0%, 0%, 0.0)');
    equalColorsOnBackground('black', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)');
    equalColorsOnBackground('black', 'rgba(0, 204, 0, 1.0)', 'rgba(0%, 80%, 0%, 1.0)', 'rgba(0, 255, 0, 0.8)', 'rgba(0%, 100%, 0%, 0.8)');
    equalColorsOnBackground('black', 'rgba(0, 153, 0, 1.0)', 'rgba(0%, 60%, 0%, 1.0)', 'rgba(0, 255, 0, 0.6)', 'rgba(0%, 100%, 0%, 0.6)');
    equalColorsOnBackground('black', 'rgba(0, 102, 0, 1.0)', 'rgba(0%, 40%, 0%, 1.0)', 'rgba(0, 255, 0, 0.4)', 'rgba(0%, 100%, 0%, 0.4)');
    equalColorsOnBackground('black', 'rgba(0, 51, 0, 1.0)', 'rgba(0%, 20%, 0%, 1.0)', 'rgba(0, 255, 0, 0.2)', 'rgba(0%, 100%, 0%, 0.2)');
    equalColorsOnBackground('black', 'rgba(0, 0, 0, 1.0)', 'rgba(0%, 0%, 0%, 1.0)', 'rgba(0, 255, 0, 0.0)', 'rgba(0%, 100%, 0%, 0.0)');
    equalColorsOnBackground('white', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)');
    equalColorsOnBackground('white', 'rgba(51, 255, 51, 1.0)', 'rgba(20%, 100%, 20%, 1.0)', 'rgba(0, 255, 0, 0.8)', 'rgba(0%, 100%, 0%, 0.8)');
    equalColorsOnBackground('white', 'rgba(102, 255, 102, 1.0)', 'rgba(40%, 100%, 40%, 1.0)', 'rgba(0, 255, 0, 0.6)', 'rgba(0%, 100%, 0%, 0.6)');
    equalColorsOnBackground('white', 'rgba(153, 255, 153, 1.0)', 'rgba(60%, 100%, 60%, 1.0)', 'rgba(0, 255, 0, 0.4)', 'rgba(0%, 100%, 0%, 0.4)');
    equalColorsOnBackground('white', 'rgba(204, 255, 204, 1.0)', 'rgba(80%, 100%, 80%, 1.0)', 'rgba(0, 255, 0, 0.2)', 'rgba(0%, 100%, 0%, 0.2)');
    equalColorsOnBackground('white', 'rgba(255, 255, 255, 1.0)', 'rgba(100%, 100%, 100%, 1.0)', 'rgba(0, 255, 0, 0.0)', 'rgba(0%, 100%, 0%, 0.0)');
    equalColorsOnBackground('black', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)');
    equalColorsOnBackground('black', 'rgba(0, 0, 204, 1.0)', 'rgba(0%, 0%, 80%, 1.0)', 'rgba(0, 0, 255, 0.8)', 'rgba(0%, 0%, 100%, 0.8)');
    equalColorsOnBackground('black', 'rgba(0, 0, 153, 1.0)', 'rgba(0%, 0%, 60%, 1.0)', 'rgba(0, 0, 255, 0.6)', 'rgba(0%, 0%, 100%, 0.6)');
    equalColorsOnBackground('black', 'rgba(0, 0, 102, 1.0)', 'rgba(0%, 0%, 40%, 1.0)', 'rgba(0, 0, 255, 0.4)', 'rgba(0%, 0%, 100%, 0.4)');
    equalColorsOnBackground('black', 'rgba(0, 0, 51, 1.0)', 'rgba(0%, 0%, 20%, 1.0)', 'rgba(0, 0, 255, 0.2)', 'rgba(0%, 0%, 100%, 0.2)');
    equalColorsOnBackground('black', 'rgba(0, 0, 0, 1.0)', 'rgba(0%, 0%, 0%, 1.0)', 'rgba(0, 0, 255, 0.0)', 'rgba(0%, 0%, 100%, 0.0)');
    equalColorsOnBackground('white', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)');
    equalColorsOnBackground('white', 'rgba(51, 51, 255, 1.0)', 'rgba(20%, 20%, 100%, 1.0)', 'rgba(0, 0, 255, 0.8)', 'rgba(0%, 0%, 100%, 0.8)');
    equalColorsOnBackground('white', 'rgba(102, 102, 255, 1.0)', 'rgba(40%, 40%, 100%, 1.0)', 'rgba(0, 0, 255, 0.6)', 'rgba(0%, 0%, 100%, 0.6)');
    equalColorsOnBackground('white', 'rgba(153, 153, 255, 1.0)', 'rgba(60%, 60%, 100%, 1.0)', 'rgba(0, 0, 255, 0.4)', 'rgba(0%, 0%, 100%, 0.4)');
    equalColorsOnBackground('white', 'rgba(204, 204, 255, 1.0)', 'rgba(80%, 80%, 100%, 1.0)', 'rgba(0, 0, 255, 0.2)', 'rgba(0%, 0%, 100%, 0.2)');
    equalColorsOnBackground('white', 'rgba(255, 255, 255, 1.0)', 'rgba(100%, 100%, 100%, 1.0)', 'rgba(0, 0, 255, 0.0)', 'rgba(0%, 0%, 100%, 0.0)');
    equalColorsOnBackground('lime', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)');
    equalColorsOnBackground('lime', 'rgba(204, 51, 0, 1.0)', 'rgba(80%, 20%, 0%, 1.0)', 'rgba(255, 0, 0, 0.8)', 'rgba(100%, 0%, 0%, 0.8)');
    equalColorsOnBackground('lime', 'rgba(153, 102, 0, 1.0)', 'rgba(60%, 40%, 0%, 1.0)', 'rgba(255, 0, 0, 0.6)', 'rgba(100%, 0%, 0%, 0.6)');
    equalColorsOnBackground('lime', 'rgba(102, 153, 0, 1.0)', 'rgba(40%, 60%, 0%, 1.0)', 'rgba(255, 0, 0, 0.4)', 'rgba(100%, 0%, 0%, 0.4)');
    equalColorsOnBackground('lime', 'rgba(51, 204, 0, 1.0)', 'rgba(20%, 80%, 0%, 1.0)', 'rgba(255, 0, 0, 0.2)', 'rgba(100%, 0%, 0%, 0.2)');
    equalColorsOnBackground('lime', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)', 'rgba(255, 0, 0, 0.0)', 'rgba(100%, 0%, 0%, 0.0)');
    equalColorsOnBackground('blue', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)', 'rgba(0, 255, 0, 1.0)', 'rgba(0%, 100%, 0%, 1.0)');
    equalColorsOnBackground('blue', 'rgba(0, 204, 51, 1.0)', 'rgba(0%, 80%, 20%, 1.0)', 'rgba(0, 255, 0, 0.8)', 'rgba(0%, 100%, 0%, 0.8)');
    equalColorsOnBackground('blue', 'rgba(0, 153, 102, 1.0)', 'rgba(0%, 60%, 40%, 1.0)', 'rgba(0, 255, 0, 0.6)', 'rgba(0%, 100%, 0%, 0.6)');
    equalColorsOnBackground('blue', 'rgba(0, 102, 153, 1.0)', 'rgba(0%, 40%, 60%, 1.0)', 'rgba(0, 255, 0, 0.4)', 'rgba(0%, 100%, 0%, 0.4)');
    equalColorsOnBackground('blue', 'rgba(0, 51, 204, 1.0)', 'rgba(0%, 20%, 80%, 1.0)', 'rgba(0, 255, 0, 0.2)', 'rgba(0%, 100%, 0%, 0.2)');
    equalColorsOnBackground('blue', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)', 'rgba(0, 255, 0, 0.0)', 'rgba(0%, 100%, 0%, 0.0)');
    equalColorsOnBackground('red', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)', 'rgba(0, 0, 255, 1.0)', 'rgba(0%, 0%, 100%, 1.0)');
    equalColorsOnBackground('red', 'rgba(51, 0, 204, 1.0)', 'rgba(20%, 0%, 80%, 1.0)', 'rgba(0, 0, 255, 0.8)', 'rgba(0%, 0%, 100%, 0.8)');
    equalColorsOnBackground('red', 'rgba(102, 0, 153, 1.0)', 'rgba(40%, 0%, 60%, 1.0)', 'rgba(0, 0, 255, 0.6)', 'rgba(0%, 0%, 100%, 0.6)');
    equalColorsOnBackground('red', 'rgba(153, 0, 102, 1.0)', 'rgba(60%, 0%, 40%, 1.0)', 'rgba(0, 0, 255, 0.4)', 'rgba(0%, 0%, 100%, 0.4)');
    equalColorsOnBackground('red', 'rgba(204, 0, 51, 1.0)', 'rgba(80%, 0%, 20%, 1.0)', 'rgba(0, 0, 255, 0.2)', 'rgba(0%, 0%, 100%, 0.2)');
    equalColorsOnBackground('red', 'rgba(255, 0, 0, 1.0)', 'rgba(100%, 0%, 0%, 1.0)', 'rgba(0, 0, 255, 0.0)', 'rgba(0%, 0%, 100%, 0.0)');
});