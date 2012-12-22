requirejs.config({
	paths : {
        'text'           : '../../vendor/require/plugins/2.0.3/text'
      , 'jquery'         : '../../vendor/jquery/1.8.3/jquery.min'
      , 'underscore'     : '../../vendor/lodash/1.0.0-rc.3/lodash.min'
      , 'init'           : '../shared/app/init'
      , 'Templates'      : '../shared/app/templates/Templates'
      , 'TemplateSource' : '../shared/app/templates/TemplateSource'
      , 'Application'    : '../shared/app/Application'
      , 'AppHelper'      : 'app/helpers/MobileHelper'    
      // additional mobile dependencies ...
	}
});
require(['init']);
