describe('HSLA Color Parsing and Blending', function(){
	var acceptableDiff = 3;
	beforeEach(function() {
	  this.addMatchers({
		toRoughlyEqual: function(expected){
			return isNaN(this.actual) == isNaN(expected) && Math.abs(expected - this.actual) <= acceptableDiff;
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
    equalColorsOnBackground('black', 'hsla(0, 100%, 50%, 1)', 'hsla(0, 100%, 50%, 1.0)', 'rgb(100%, 0%, 0%)');
    equalColorsOnBackground('black', 'hsla(0, 100%, 50%, 0.8)', 'hsla(0, 100%, 40%, 1.0)', 'rgb(80%, 0%, 0%)');
    equalColorsOnBackground('black', 'hsla(0, 100%, 50%, 0.6)', 'hsla(0, 100%, 30%, 1.0)', 'rgb(60%, 0%, 0%)');
    equalColorsOnBackground('black', 'hsla(0, 100%, 50%, 0.4)', 'hsla(0, 100%, 20%, 1.0)', 'rgb(40%, 0%, 0%)');
    equalColorsOnBackground('black', 'hsla(0, 100%, 50%, 0.2)', 'hsla(0, 100%, 10%, 1.0)', 'rgb(20%, 0%, 0%)');
    equalColorsOnBackground('black', 'hsla(0, 100%, 50%, 0)', 'hsla(0, 100%, 0%, 1.0)', 'rgb(0%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(0, 100%, 50%, 1)', 'hsla(0, 100%, 50%, 1.0)', 'rgb(100%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(0, 100%, 50%, 0.8)', 'hsla(0, 100%, 60%, 1.0)', 'rgb(100%, 20%, 20%)');
    equalColorsOnBackground('white', 'hsla(0, 100%, 50%, 0.6)', 'hsla(0, 100%, 70%, 1.0)', 'rgb(100%, 40%, 40%)');
    equalColorsOnBackground('white', 'hsla(0, 100%, 50%, 0.4)', 'hsla(0, 100%, 80%, 1.0)', 'rgb(100%, 60%, 60%)');
    equalColorsOnBackground('white', 'hsla(0, 100%, 50%, 0.2)', 'hsla(0, 100%, 90%, 1.0)', 'rgb(100%, 80%, 80%)');
    equalColorsOnBackground('white', 'hsla(0, 100%, 50%, 0)', 'hsla(0, 100%, 100%, 1.0)', 'rgb(100%, 100%, 100%)');
    equalColorsOnBackground('black', 'hsla(60, 100%, 50%, 1)', 'hsla(60, 100%, 50%, 1.0)', 'rgb(100%, 100%, 0%)');
    equalColorsOnBackground('black', 'hsla(60, 100%, 50%, 0.8)', 'hsla(60, 100%, 40%, 1.0)', 'rgb(80%, 80%, 0%)');
    equalColorsOnBackground('black', 'hsla(60, 100%, 50%, 0.6)', 'hsla(60, 100%, 30%, 1.0)', 'rgb(60%, 60%, 0%)');
    equalColorsOnBackground('black', 'hsla(60, 100%, 50%, 0.4)', 'hsla(60, 100%, 20%, 1.0)', 'rgb(40%, 40%, 0%)');
    equalColorsOnBackground('black', 'hsla(60, 100%, 50%, 0.2)', 'hsla(60, 100%, 10%, 1.0)', 'rgb(20%, 20%, 0%)');
    equalColorsOnBackground('black', 'hsla(60, 100%, 50%, 0)', 'hsla(60, 100%, 0%, 1.0)', 'rgb(0%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(60, 100%, 50%, 1)', 'hsla(60, 100%, 50%, 1.0)', 'rgb(100%, 100%, 0%)');
    equalColorsOnBackground('white', 'hsla(60, 100%, 50%, 0.8)', 'hsla(60, 100%, 60%, 1.0)', 'rgb(100%, 100%, 20%)');
    equalColorsOnBackground('white', 'hsla(60, 100%, 50%, 0.6)', 'hsla(60, 100%, 70%, 1.0)', 'rgb(100%, 100%, 40%)');
    equalColorsOnBackground('white', 'hsla(60, 100%, 50%, 0.4)', 'hsla(60, 100%, 80%, 1.0)', 'rgb(100%, 100%, 60%)');
    equalColorsOnBackground('white', 'hsla(60, 100%, 50%, 0.2)', 'hsla(60, 100%, 90%, 1.0)', 'rgb(100%, 100%, 80%)');
    equalColorsOnBackground('white', 'hsla(60, 100%, 50%, 0)', 'hsla(60, 100%, 100%, 1.0)', 'rgb(100%, 100%, 100%)');
    equalColorsOnBackground('black', 'hsla(120, 100%, 50%, 1)', 'hsla(120, 100%, 50%, 1.0)', 'rgb(0%, 100%, 0%)');
    equalColorsOnBackground('black', 'hsla(120, 100%, 50%, 0.8)', 'hsla(120, 100%, 40%, 1.0)', 'rgb(0%, 80%, 0%)');
    equalColorsOnBackground('black', 'hsla(120, 100%, 50%, 0.6)', 'hsla(120, 100%, 30%, 1.0)', 'rgb(0%, 60%, 0%)');
    equalColorsOnBackground('black', 'hsla(120, 100%, 50%, 0.4)', 'hsla(120, 100%, 20%, 1.0)', 'rgb(0%, 40%, 0%)');
    equalColorsOnBackground('black', 'hsla(120, 100%, 50%, 0.2)', 'hsla(120, 100%, 10%, 1.0)', 'rgb(0%, 20%, 0%)');
    equalColorsOnBackground('black', 'hsla(120, 100%, 50%, 0)', 'hsla(120, 100%, 0%, 1.0)', 'rgb(0%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(120, 100%, 50%, 1)', 'hsla(120, 100%, 50%, 1.0)', 'rgb(0%, 100%, 0%)');
    equalColorsOnBackground('white', 'hsla(120, 100%, 50%, 0.8)', 'hsla(120, 100%, 60%, 1.0)', 'rgb(20%, 100%, 20%)');
    equalColorsOnBackground('white', 'hsla(120, 100%, 50%, 0.6)', 'hsla(120, 100%, 70%, 1.0)', 'rgb(40%, 100%, 40%)');
    equalColorsOnBackground('white', 'hsla(120, 100%, 50%, 0.4)', 'hsla(120, 100%, 80%, 1.0)', 'rgb(60%, 100%, 60%)');
    equalColorsOnBackground('white', 'hsla(120, 100%, 50%, 0.2)', 'hsla(120, 100%, 90%, 1.0)', 'rgb(80%, 100%, 80%)');
    equalColorsOnBackground('white', 'hsla(120, 100%, 50%, 0)', 'hsla(120, 100%, 100%, 1.0)', 'rgb(100%, 100%, 100%)');
    equalColorsOnBackground('black', 'hsla(180, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1.0)', 'rgb(0%, 100%, 100%)');
    equalColorsOnBackground('black', 'hsla(180, 100%, 50%, 0.8)', 'hsla(180, 100%, 40%, 1.0)', 'rgb(0%, 80%, 80%)');
    equalColorsOnBackground('black', 'hsla(180, 100%, 50%, 0.6)', 'hsla(180, 100%, 30%, 1.0)', 'rgb(0%, 60%, 60%)');
    equalColorsOnBackground('black', 'hsla(180, 100%, 50%, 0.4)', 'hsla(180, 100%, 20%, 1.0)', 'rgb(0%, 40%, 40%)');
    equalColorsOnBackground('black', 'hsla(180, 100%, 50%, 0.2)', 'hsla(180, 100%, 10%, 1.0)', 'rgb(0%, 20%, 20%)');
    equalColorsOnBackground('black', 'hsla(180, 100%, 50%, 0)', 'hsla(180, 100%, 0%, 1.0)', 'rgb(0%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(180, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1.0)', 'rgb(0%, 100%, 100%)');
    equalColorsOnBackground('white', 'hsla(180, 100%, 50%, 0.8)', 'hsla(180, 100%, 60%, 1.0)', 'rgb(20%, 100%, 100%)');
    equalColorsOnBackground('white', 'hsla(180, 100%, 50%, 0.6)', 'hsla(180, 100%, 70%, 1.0)', 'rgb(40%, 100%, 100%)');
    equalColorsOnBackground('white', 'hsla(180, 100%, 50%, 0.4)', 'hsla(180, 100%, 80%, 1.0)', 'rgb(60%, 100%, 100%)');
    equalColorsOnBackground('white', 'hsla(180, 100%, 50%, 0.2)', 'hsla(180, 100%, 90%, 1.0)', 'rgb(80%, 100%, 100%)');
    equalColorsOnBackground('white', 'hsla(180, 100%, 50%, 0)', 'hsla(180, 100%, 100%, 1.0)', 'rgb(100%, 100%, 100%)');
    equalColorsOnBackground('black', 'hsla(240, 100%, 50%, 1)', 'hsla(240, 100%, 50%, 1.0)', 'rgb(0%, 0%, 100%)');
    equalColorsOnBackground('black', 'hsla(240, 100%, 50%, 0.8)', 'hsla(240, 100%, 40%, 1.0)', 'rgb(0%, 0%, 80%)');
    equalColorsOnBackground('black', 'hsla(240, 100%, 50%, 0.6)', 'hsla(240, 100%, 30%, 1.0)', 'rgb(0%, 0%, 60%)');
    equalColorsOnBackground('black', 'hsla(240, 100%, 50%, 0.4)', 'hsla(240, 100%, 20%, 1.0)', 'rgb(0%, 0%, 40%)');
    equalColorsOnBackground('black', 'hsla(240, 100%, 50%, 0.2)', 'hsla(240, 100%, 10%, 1.0)', 'rgb(0%, 0%, 20%)');
    equalColorsOnBackground('black', 'hsla(240, 100%, 50%, 0)', 'hsla(240, 100%, 0%, 1.0)', 'rgb(0%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(240, 100%, 50%, 1)', 'hsla(240, 100%, 50%, 1.0)', 'rgb(0%, 0%, 100%)');
    equalColorsOnBackground('white', 'hsla(240, 100%, 50%, 0.8)', 'hsla(240, 100%, 60%, 1.0)', 'rgb(20%, 20%, 100%)');
    equalColorsOnBackground('white', 'hsla(240, 100%, 50%, 0.6)', 'hsla(240, 100%, 70%, 1.0)', 'rgb(40%, 40%, 100%)');
    equalColorsOnBackground('white', 'hsla(240, 100%, 50%, 0.4)', 'hsla(240, 100%, 80%, 1.0)', 'rgb(60%, 60%, 100%)');
    equalColorsOnBackground('white', 'hsla(240, 100%, 50%, 0.2)', 'hsla(240, 100%, 90%, 1.0)', 'rgb(80%, 80%, 100%)');
    equalColorsOnBackground('white', 'hsla(240, 100%, 50%, 0)', 'hsla(240, 100%, 100%, 1.0)', 'rgb(100%, 100%, 100%)');
    equalColorsOnBackground('black', 'hsla(300, 100%, 50%, 1)', 'hsla(300, 100%, 50%, 1.0)', 'rgb(100%, 0%, 100%)');
    equalColorsOnBackground('black', 'hsla(300, 100%, 50%, 0.8)', 'hsla(300, 100%, 40%, 1.0)', 'rgb(80%, 0%, 80%)');
    equalColorsOnBackground('black', 'hsla(300, 100%, 50%, 0.6)', 'hsla(300, 100%, 30%, 1.0)', 'rgb(60%, 0%, 60%)');
    equalColorsOnBackground('black', 'hsla(300, 100%, 50%, 0.4)', 'hsla(300, 100%, 20%, 1.0)', 'rgb(40%, 0%, 40%)');
    equalColorsOnBackground('black', 'hsla(300, 100%, 50%, 0.2)', 'hsla(300, 100%, 10%, 1.0)', 'rgb(20%, 0%, 20%)');
    equalColorsOnBackground('black', 'hsla(300, 100%, 50%, 0)', 'hsla(300, 100%, 0%, 1.0)', 'rgb(0%, 0%, 0%)');
    equalColorsOnBackground('white', 'hsla(300, 100%, 50%, 1)', 'hsla(300, 100%, 50%, 1.0)', 'rgb(100%, 0%, 100%)');
    equalColorsOnBackground('white', 'hsla(300, 100%, 50%, 0.8)', 'hsla(300, 100%, 60%, 1.0)', 'rgb(100%, 20%, 100%)');
    equalColorsOnBackground('white', 'hsla(300, 100%, 50%, 0.6)', 'hsla(300, 100%, 70%, 1.0)', 'rgb(100%, 40%, 100%)');
    equalColorsOnBackground('white', 'hsla(300, 100%, 50%, 0.4)', 'hsla(300, 100%, 80%, 1.0)', 'rgb(100%, 60%, 100%)');
    equalColorsOnBackground('white', 'hsla(300, 100%, 50%, 0.2)', 'hsla(300, 100%, 90%, 1.0)', 'rgb(100%, 80%, 100%)');
    equalColorsOnBackground('white', 'hsla(300, 100%, 50%, 0)', 'hsla(300, 100%, 100%, 1.0)', 'rgb(100%, 100%, 100%)');
    equalColorsOnBackground('lime', 'hsla(0, 100%, 50%, 1)', 'rgb(100%, 0%, 0%)');
    equalColorsOnBackground('lime', 'hsla(0, 100%, 50%, 0.8)', 'rgb(80%, 20%, 0%)');
    equalColorsOnBackground('lime', 'hsla(0, 100%, 50%, 0.6)', 'rgb(60%, 40%, 0%)');
    equalColorsOnBackground('lime', 'hsla(0, 100%, 50%, 0.4)', 'rgb(40%, 60%, 0%)');
    equalColorsOnBackground('lime', 'hsla(0, 100%, 50%, 0.2)', 'rgb(20%, 80%, 0%)');
    equalColorsOnBackground('lime', 'hsla(0, 100%, 50%, 0)', 'rgb(0%, 100%, 0%)');
    equalColorsOnBackground('blue', 'hsla(120, 100%, 50%, 1)', 'rgb(0%, 100%, 0%)');
    equalColorsOnBackground('blue', 'hsla(120, 100%, 50%, 0.8)', 'rgb(0%, 80%, 20%)');
    equalColorsOnBackground('blue', 'hsla(120, 100%, 50%, 0.6)', 'rgb(0%, 60%, 40%)');
    equalColorsOnBackground('blue', 'hsla(120, 100%, 50%, 0.4)', 'rgb(0%, 40%, 60%)');
    equalColorsOnBackground('blue', 'hsla(120, 100%, 50%, 0.2)', 'rgb(0%, 20%, 80%)');
    equalColorsOnBackground('blue', 'hsla(120, 100%, 50%, 0)', 'rgb(0%, 0%, 100%)');
    equalColorsOnBackground('red', 'hsla(240, 100%, 50%, 1)', 'rgb(0%, 0%, 100%)');
    equalColorsOnBackground('red', 'hsla(240, 100%, 50%, 0.8)', 'rgb(20%, 0%, 80%)');
    equalColorsOnBackground('red', 'hsla(240, 100%, 50%, 0.6)', 'rgb(40%, 0%, 60%)');
    equalColorsOnBackground('red', 'hsla(240, 100%, 50%, 0.4)', 'rgb(60%, 0%, 40%)');
    equalColorsOnBackground('red', 'hsla(240, 100%, 50%, 0.2)', 'rgb(80%, 0%, 20%)');
    equalColorsOnBackground('red', 'hsla(240, 100%, 50%, 0)', 'rgb(100%, 0%, 0%)');
});