 define(['jquery'],function($){
    var init = function(){
       alert( $.isWindow(window) );
    };
    return {
        init: init
    };
});