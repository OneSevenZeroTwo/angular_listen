;
(function() {
	var directives = angular.module("directives", []);

	//bill过滤器去掉图片的size
	directives.filter("change", function() {
		return function(change) {
			var arr = change.split("{size}");
			var output = arr.join("")
			return output;
		}
	})
	//设置输入文字的省略号
	directives.filter("nomore", function() {
		return function(nomore) {
			if(nomore.length >=12){
				return nomore.substring(0,12)+"..."
			}else{
				return nomore
			}
		}
	})

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
	directives.directive("xbill", ["$http","$sce", function($http,$sce) {
		return {
			templateUrl: "directive/xbill.html",
			link: function(scope, ele, attr) {
				scope.Bill;
				scope.Music;
				$http({
					method: "get",
					url: "http://localhost:6789/bill",
				}).then(function(data) {
					console.log(data)
					scope.Bill = data.data.plist.list.info;

				})
				
				//放歌	
				scope.play = function(hash){
			      $http({
					method: "get",
					params:{
						song:hash
					},
					url: "http://localhost:6789/gethashsong",
				    }).then(function(data) {
					console.log(data)
					scope.Music = data.data.url
					console.log(scope.Music)
				   })
				}
			}
		}
	}]);

	directives.directive("xartists", ["$http", function($http) {
		return {
			templateUrl: "directive/xartists.html",
			link: function(scope, ele, attr) {
				scope.art;
				$http({
					method: "get",
					url: "http://localhost:6789/xart",
				}).then(function(data) {
					console.log(data)

					scope.art = data.data.plist.list.info
				})
			}
		}
	}]);

	directives.directive("xmv",  function() {
		return {
			templateUrl: "directive/xmv.html",

		}
	});
	
	 directives.directive("xalbum",["$http","$state", function($http,$state) {
		return {
			templateUrl: "directive/xalbum.html",
			link:function(scope,ele,attr){
				console.log($state.params)
				$http({
					methods:"get",
					params:{
						id:$state.params.specialid
					},
					url:"http://localhost:6789/detail",
				}).then(function(data){
					console.log(data)
				})
			}
		}
	}]);
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