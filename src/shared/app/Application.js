// shared/app/Application.js
define( function(require) {
    var AppHelper = require('AppHelper')
      , Templates = require('Templates');
    return {
        intialize: function() {
		AppHelper.doSomething();
		$('#app-container').append( Templates.someView() );
	}
    }
});
