(function(context){

var Configuration = context.Configuration = {};

// Runner name
Configuration.name = 'MooTools Color';

// Presets - combine the sets and the source to a preset to easily run a test
Configuration.presets = {

	'color': {
		sets: ['color'],
		source: ['color-1.0']
	}

};

Configuration.defaultPresets = {
	browser: 'color',
	nodejs: 'color',
	jsdt: 'color'
};

/*
 * An object with sets. Each item in the object should have an path key,
 * that specifies where the spec files are and an array with all the files
 * without the .js extension relative to the given path
 */
Configuration.sets = {

	'color': {
		path: '1.0/',
		files: [
			'RGB',
			'RGBA',
			'HSL',
			'HSLA',
			'Keywords'
		]
	}

};


/*
 * An object with the source files. Each item should have an path key,
 * that specifies where the source files are and an array with all the files
 * without the .js extension relative to the given path
 */
Configuration.source = {

	'color-1.0': {
		path: '../Source/',
		files: [
			'Color'
		]
	}

};

})(typeof exports != 'undefined' ? exports : this);
