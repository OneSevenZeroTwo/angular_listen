;(function(){
	var routers = angular.module("routers",[]);
	routers.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state("index",{
			url:"/index",
			templateUrl:"template/index.html"
		}).state("index.recommend",{
			url:"/recommend",
			templateUrl:"template/recommend.html"
		}).state("index.cate",{
			url:"/cate",
			templateUrl:"template/cate.html"
		}).state("index.bill",{
			url:"/bill",
			templateUrl:"template/bill.html"
		}).state("index.artists",{
			url:"/artists",
			templateUrl:"template/artists.html"
		})

		
//		.state("Detail",{
//			url:"/Detail",
//			templateUrl:"template/Detail.html"
//		})
		.state("index.album",{
			url:"/album/:specialid",
			templateUrl:"template/album.html"
		})
		.state("index.mv",{
			url:"/mv",
			templateUrl:"template/mv.html"
		});

		$urlRouterProvider.when("","/index/recommend")
	})
})();