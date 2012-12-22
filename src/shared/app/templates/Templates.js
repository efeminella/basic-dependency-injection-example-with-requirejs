// shared templates module
define( function( require ) {
    var templates = require('underscore').template
      , source    = require('TemplateSource');
    return {
	someView: function() {
	    return templates(source.someViewTpl)();
	}
    }
});
