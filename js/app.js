

angular.module("HCCStudioApp", ["ngRoute", "ngAnimate"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "templates/gallery.html",
			controller: "GalleryController",
			controllerAs: "vm"
		})
		.when("/gallery", {
			templateUrl: "templates/gallery.html",
			controller: "GalleryController",
			controllerAs: "vm"
		})
		.when("/about", {
			templateUrl: "templates/about.html",
			controller: "AboutController",
			controllerAs: "vm"
		})
		.when("/contact", {
			templateUrl: "templates/contact.html",
			controller: "ContactController",
			controllerAs: "vm"
		})
		.when("/error", {
			templateUrl: "templates/error.html",
			controller: "ErrorController",
			controllerAs: "vm"
		})
		.otherwise({
			redirectTo: "/error"
		});
	}])

	.controller("GalleryController", function() {
		$(document).ready(function() {
			$(".fancybox").fancybox({
				openEffect	: 'none',
				closeEffect	: 'none'
			});
		
		 $(function(){
 
    var $container = $('#container');
  
    $container.imagesLoaded( function(){
      $container.masonry({
        itemSelector : '.masonryImage'
      });
    });
  
  });
		});
	})
	.controller("AboutController", function() {

	})
	.controller("ContactController", function() {

	})
	.controller("ErrorController", function() {
		
	});

