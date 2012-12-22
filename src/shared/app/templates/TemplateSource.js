// shared templates source module
define( function( require ) {
    return {
    	// loads the some-view.tpl based on the application's context: 
    	// either mobile or desktop
		someViewTpl: require('text!app/templates/some-view.tpl')
    }
});