(function(){
  
  var app = angular.module('portfolio', []);
  app.controller('PortfolioController', function(){
    this.pages = [
      	{ 
    		linksrc: "portfolio-animation.html",
    		imgsrc: "img/portfolio-01.jpg",
    	},
    	{ 
    		linksrc: "portfolio-illustration.html",
    		imgsrc: "img/portfolio-02.jpg",
    	},
    	{ 
    		linksrc: "portfolio-showreel.html",
    		imgsrc: "img/portfolio-03.jpg",
    	},
    	{ 
    		linksrc: "portfolio-freelance.html",
    		imgsrc: "img/portfolio-04.jpg",
    	}
    ];
  });
})();