var $ = require('jquery');
require('./less');

var App = function() {
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Heading <div> </div></h3></div>');
};

var app = new App();
app.get = function() {};
