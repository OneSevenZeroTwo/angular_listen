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

    directives.directive("xcate",["$http", function($http) {
        return {
            templateUrl: "directive/xcate.html",
            link:function(scope,ele,attr){
                scope.isShou = false;
                 $http({
                    method: "get",
                    url: "http://localhost:6789/liuxing",
                    params: {

                    }
                }).then(function(data) {
                    // console.log(data);
                });
            }
        }
    }]);

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

    directives.directive("xcatelist",["$http","$window",function($http,$window) {
        return {
            templateUrl: "directive/xcatelist.html",
            link:function(scope,ele,attr){
                console.log($window.location.hash.split("catelist/")[1]);
                $http({
                    url:"http://localhost:6789/catelist",
                    params:{
                        type:$window.location.hash.split("catelist/")[1]
                    }
                }).then(function(data){
                    scope.catelist = data.data.songs.list;
                    var arr = data.data.info.banner7url.split("{size}")
                    scope.catelistpic = arr.join("");
                })
            }
        }
    }]);
})();