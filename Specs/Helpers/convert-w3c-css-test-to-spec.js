var output = [
	"describe('Color Parsing Test Suite', function(){\n",
	"	function expectEqualColors(c, c2){\n",
	"		expect(c.red).toEqual(c2.red);\n",
	"		expect(c.green).toEqual(c2.green);\n",
	"		expect(c.blue).toEqual(c2.blue);\n",
	"		expect(c.alpha).toEqual(c2.alpha);\n",
	"	}\n",
	"	function equalColors(){\n",
	"		var colors = Array.prototype.slice.call(arguments);\n",
	"		it('should parse the colors ' + colors.join(', ') + ' as equivalents', function(){\n",
	"			var c = new Color(colors[0]);\n",
	"			for (var i = 1, l = colors.length; i < l; i++){\n",
	"				expectEqualColors(c, new Color(colors[i]));\n",
	"			}\n",
	"		});\n",
	"		it('should parse the color ' + colors[0] + ' equivalently after being serialized as HEX', function(){\n",
	"			var c = new Color(colors[0]);\n",
	"			expectEqualColors(c, new Color(c.toHEX()));\n",
	"		});\n",
	"		it('should parse the color ' + colors[0] + ' equivalently after being serialized as RGB', function(){\n",
	"			var c = new Color(colors[0]);\n",
	"			expectEqualColors(c, new Color(c.toRGB()));\n",
	"		});\n",
	"		it('should parse the color ' + colors[0] + ' equivalently after being serialized as HSB', function(){\n",
	"			var c = new Color(colors[0]);\n",
	"			expectEqualColors(c, new Color(c.toHSB()));\n",
	"		});\n",
	"		it('should parse the color ' + colors[0] + ' equivalently after being serialized as HSL', function(){\n",
	"			var c = new Color(colors[0]);\n",
	"			expectEqualColors(c, new Color(c.toHSL()));\n",
	"		});\n",
	"	}\n"
];

var tables = document.getElements('table');

tables.each(function(table){
    
    var rows = table.getElements('tr');
    var cells = rows.getElements('td');
    for (var i = 1, l = cells[0].length - 1; i < l; i++)
    {
        for (var r = 0; r < rows.length; r++){
            var st = cells[r][i].getAttribute('style');
            output.push(r == 0 ? '	equalColors(' : ', ');
            output.push("'" + st.substr(12) + "'");
        }
        if (r > 0) output.push(');\n');
    }
    
});

output.push("});");

new Element('textarea', { value: output.join(''), styles: { width: '100%', height: '100%' }})
	.inject(document.body.empty());