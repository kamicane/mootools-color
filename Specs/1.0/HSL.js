describe('HSL Color Parsing', function(){
	var acceptableDiff = 3;
	beforeEach(function() {
	  this.addMatchers({
		toRoughlyEqual: function(expected){
			return isNaN(this.actual) == isNaN(expected) && Math.abs(expected - this.actual) <= acceptableDiff;
		}
	  });
	});
    function expectEqualColors(c, c2){
        expect(c.red).toRoughlyEqual(c2.red);
        expect(c.green).toRoughlyEqual(c2.green);
        expect(c.blue).toRoughlyEqual(c2.blue);
        expect(c.alpha).toEqual(c2.alpha);
    }
    function equalColors(){
        var colors = Array.prototype.slice.call(arguments);
        it('should parse the colors ' + colors.join(', ') + ' as equivalents', function(){
            var c = new Color(colors[0]);
            for (var i = 1, l = colors.length; i < l; i++){
                expectEqualColors(c, new Color(colors[i]));
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
    equalColors('hsl(0, 100%, 50%)', 'rgb(255, 0, 0)');
    equalColors('hsl(12, 100%, 50%)', 'rgb(255, 51, 0)');
    equalColors('hsl(24, 100%, 50%)', 'rgb(255, 102, 0)');
    equalColors('hsl(36, 100%, 50%)', 'rgb(255, 153, 0)');
    equalColors('hsl(48, 100%, 50%)', 'rgb(255, 204, 0)');
    equalColors('hsl(60, 100%, 50%)', 'rgb(255, 255, 0)');
    equalColors('hsl(72, 100%, 50%)', 'rgb(204, 255, 0)');
    equalColors('hsl(84, 100%, 50%)', 'rgb(153, 255, 0)');
    equalColors('hsl(96, 100%, 50%)', 'rgb(102, 255, 0)');
    equalColors('hsl(108, 100%, 50%)', 'rgb(51, 255, 0)');
    equalColors('hsl(120, 100%, 50%)', 'rgb(0, 255, 0)');
    equalColors('hsl(120, 100%, 50%)', 'rgb(0, 255, 0)');
    equalColors('hsl(132, 100%, 50%)', 'rgb(0, 255, 51)');
    equalColors('hsl(144, 100%, 50%)', 'rgb(0, 255, 102)');
    equalColors('hsl(156, 100%, 50%)', 'rgb(0, 255, 153)');
    equalColors('hsl(168, 100%, 50%)', 'rgb(0, 255, 204)');
    equalColors('hsl(180, 100%, 50%)', 'rgb(0, 255, 255)');
    equalColors('hsl(192, 100%, 50%)', 'rgb(0, 204, 255)');
    equalColors('hsl(204, 100%, 50%)', 'rgb(0, 153, 255)');
    equalColors('hsl(216, 100%, 50%)', 'rgb(0, 102, 255)');
    equalColors('hsl(228, 100%, 50%)', 'rgb(0, 51, 255)');
    equalColors('hsl(240, 100%, 50%)', 'rgb(0, 0, 255)');
    equalColors('hsl(240, 100%, 50%)', 'rgb(0, 0, 255)');
    equalColors('hsl(252, 100%, 50%)', 'rgb(51, 0, 255)');
    equalColors('hsl(264, 100%, 50%)', 'rgb(102, 0, 255)');
    equalColors('hsl(276, 100%, 50%)', 'rgb(153, 0, 255)');
    equalColors('hsl(288, 100%, 50%)', 'rgb(204, 0, 255)');
    equalColors('hsl(300, 100%, 50%)', 'rgb(255, 0, 255)');
    equalColors('hsl(312, 100%, 50%)', 'rgb(255, 0, 204)');
    equalColors('hsl(324, 100%, 50%)', 'rgb(255, 0, 153)');
    equalColors('hsl(336, 100%, 50%)', 'rgb(255, 0, 102)');
    equalColors('hsl(348, 100%, 50%)', 'rgb(255, 0, 51)');
    equalColors('hsl(360, 100%, 50%)', 'rgb(255, 0, 0)');
    equalColors('hsl(0, 20%, 50%)', 'rgb(153, 102, 102)');
    equalColors('hsl(0, 60%, 50%)', 'rgb(204, 51, 51)');
    equalColors('hsl(0, 100%, 50%)', 'rgb(255, 0, 0)');
    equalColors('hsl(60, 20%, 50%)', 'rgb(153, 153, 102)');
    equalColors('hsl(60, 60%, 50%)', 'rgb(204, 204, 51)');
    equalColors('hsl(60, 100%, 50%)', 'rgb(255, 255, 0)');
    equalColors('hsl(120, 20%, 50%)', 'rgb(102, 153, 102)');
    equalColors('hsl(120, 60%, 50%)', 'rgb(51, 204, 51)');
    equalColors('hsl(120, 100%, 50%)', 'rgb(0, 255, 0)');
    equalColors('hsl(180, 20%, 50%)', 'rgb(102, 153, 153)');
    equalColors('hsl(180, 60%, 50%)', 'rgb(51, 204, 204)');
    equalColors('hsl(180, 100%, 50%)', 'rgb(0, 255, 255)');
    equalColors('hsl(240, 20%, 50%)', 'rgb(102, 102, 153)');
    equalColors('hsl(240, 60%, 50%)', 'rgb(51, 51, 204)');
    equalColors('hsl(240, 100%, 50%)', 'rgb(0, 0, 255)');
    equalColors('hsl(300, 20%, 50%)', 'rgb(153, 102, 153)');
    equalColors('hsl(300, 60%, 50%)', 'rgb(204, 51, 204)');
    equalColors('hsl(300, 100%, 50%)', 'rgb(255, 0, 255)');
    equalColors('hsl(0, 100%, 0%)', 'rgb(0, 0, 0)');
    equalColors('hsl(0, 100%, 10%)', 'rgb(51, 0, 0)');
    equalColors('hsl(0, 100%, 20%)', 'rgb(102, 0, 0)');
    equalColors('hsl(0, 100%, 30%)', 'rgb(153, 0, 0)');
    equalColors('hsl(0, 100%, 40%)', 'rgb(204, 0, 0)');
    equalColors('hsl(0, 100%, 50%)', 'rgb(255, 0, 0)');
    equalColors('hsl(0, 100%, 60%)', 'rgb(255, 51, 51)');
    equalColors('hsl(0, 100%, 70%)', 'rgb(255, 102, 102)');
    equalColors('hsl(0, 100%, 80%)', 'rgb(255, 153, 153)');
    equalColors('hsl(0, 100%, 90%)', 'rgb(255, 204, 204)');
    equalColors('hsl(0, 100%, 100%)', 'rgb(255, 255, 255)');
    equalColors('hsl(60, 100%, 0%)', 'rgb(0, 0, 0)');
    equalColors('hsl(60, 100%, 10%)', 'rgb(51, 51, 0)');
    equalColors('hsl(60, 100%, 20%)', 'rgb(102, 102, 0)');
    equalColors('hsl(60, 100%, 30%)', 'rgb(153, 153, 0)');
    equalColors('hsl(60, 100%, 40%)', 'rgb(204, 204, 0)');
    equalColors('hsl(60, 100%, 50%)', 'rgb(255, 255, 0)');
    equalColors('hsl(60, 100%, 60%)', 'rgb(255, 255, 51)');
    equalColors('hsl(60, 100%, 70%)', 'rgb(255, 255, 102)');
    equalColors('hsl(60, 100%, 80%)', 'rgb(255, 255, 153)');
    equalColors('hsl(60, 100%, 90%)', 'rgb(255, 255, 204)');
    equalColors('hsl(60, 100%, 100%)', 'rgb(255, 255, 255)');
    equalColors('hsl(120, 100%, 0%)', 'rgb(0, 0, 0)');
    equalColors('hsl(120, 100%, 10%)', 'rgb(0, 51, 0)');
    equalColors('hsl(120, 100%, 20%)', 'rgb(0, 102, 0)');
    equalColors('hsl(120, 100%, 30%)', 'rgb(0, 153, 0)');
    equalColors('hsl(120, 100%, 40%)', 'rgb(0, 204, 0)');
    equalColors('hsl(120, 100%, 50%)', 'rgb(0, 255, 0)');
    equalColors('hsl(120, 100%, 60%)', 'rgb(51, 255, 51)');
    equalColors('hsl(120, 100%, 70%)', 'rgb(102, 255, 102)');
    equalColors('hsl(120, 100%, 80%)', 'rgb(153, 255, 153)');
    equalColors('hsl(120, 100%, 90%)', 'rgb(204, 255, 204)');
    equalColors('hsl(120, 100%, 100%)', 'rgb(255, 255, 255)');
    equalColors('hsl(180, 100%, 0%)', 'rgb(0, 0, 0)');
    equalColors('hsl(180, 100%, 10%)', 'rgb(0, 51, 51)');
    equalColors('hsl(180, 100%, 20%)', 'rgb(0, 102, 102)');
    equalColors('hsl(180, 100%, 30%)', 'rgb(0, 153, 153)');
    equalColors('hsl(180, 100%, 40%)', 'rgb(0, 204, 204)');
    equalColors('hsl(180, 100%, 50%)', 'rgb(0, 255, 255)');
    equalColors('hsl(180, 100%, 60%)', 'rgb(51, 255, 255)');
    equalColors('hsl(180, 100%, 70%)', 'rgb(102, 255, 255)');
    equalColors('hsl(180, 100%, 80%)', 'rgb(153, 255, 255)');
    equalColors('hsl(180, 100%, 90%)', 'rgb(204, 255, 255)');
    equalColors('hsl(180, 100%, 100%)', 'rgb(255, 255, 255)');
    equalColors('hsl(240, 100%, 0%)', 'rgb(0, 0, 0)');
    equalColors('hsl(240, 100%, 10%)', 'rgb(0, 0, 51)');
    equalColors('hsl(240, 100%, 20%)', 'rgb(0, 0, 102)');
    equalColors('hsl(240, 100%, 30%)', 'rgb(0, 0, 153)');
    equalColors('hsl(240, 100%, 40%)', 'rgb(0, 0, 204)');
    equalColors('hsl(240, 100%, 50%)', 'rgb(0, 0, 255)');
    equalColors('hsl(240, 100%, 60%)', 'rgb(51, 51, 255)');
    equalColors('hsl(240, 100%, 70%)', 'rgb(102, 102, 255)');
    equalColors('hsl(240, 100%, 80%)', 'rgb(153, 153, 255)');
    equalColors('hsl(240, 100%, 90%)', 'rgb(204, 204, 255)');
    equalColors('hsl(240, 100%, 100%)', 'rgb(255, 255, 255)');
    equalColors('hsl(300, 100%, 0%)', 'rgb(0, 0, 0)');
    equalColors('hsl(300, 100%, 10%)', 'rgb(51, 0, 51)');
    equalColors('hsl(300, 100%, 20%)', 'rgb(102, 0, 102)');
    equalColors('hsl(300, 100%, 30%)', 'rgb(153, 0, 153)');
    equalColors('hsl(300, 100%, 40%)', 'rgb(204, 0, 204)');
    equalColors('hsl(300, 100%, 50%)', 'rgb(255, 0, 255)');
    equalColors('hsl(300, 100%, 60%)', 'rgb(255, 51, 255)');
    equalColors('hsl(300, 100%, 70%)', 'rgb(255, 102, 255)');
    equalColors('hsl(300, 100%, 80%)', 'rgb(255, 153, 255)');
    equalColors('hsl(300, 100%, 90%)', 'rgb(255, 204, 255)');
    equalColors('hsl(300, 100%, 100%)', 'rgb(255, 255, 255)');
});