;(function(){
	var directives = angular.module("directives",[]);


	directives.directive("xheader", function() {
        return {
            templateUrl: "directive/xheader.html",
        }
    });


    directives.directive("xrecommend", function() {
        return {
            templateUrl: "directive/xrecommend.html",
        }
    });

    directives.directive("xcate", function() {
        return {
            templateUrl: "directive/xcate.html",
        }
    });

    directives.directive("xbill", function() {
        return {
            templateUrl: "directive/xbill.html",
        }
    });

    directives.directive("xartists", function() {
        return {
            templateUrl: "directive/xartists.html",
        }
    });

    directives.directive("xmv", function() {
        return {
            templateUrl: "directive/xmv.html",
        }
    });
})();