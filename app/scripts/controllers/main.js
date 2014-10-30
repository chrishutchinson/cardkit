'use strict';

/**
 * @ngdoc function
 * @name cardkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardkitApp
 */
angular.module('cardkitApp')
  .controller('MainCtrl', function ($scope, snapSVG) {
  	$scope.config = {
  		canvas: {
  			height: 335,
  			width: 600
  		},
  		headline: {
  			text: 'This is my headline',
  			color: '#6B6B6B',
  			fontSize: '26',
  			fontFamily: 'TimesModern-Regular',
  		},
  		byline: {
  			text: 'This is my byline',
  			color: '#850029',
  			fontSize: '20',
  			fontFamily: 'TimesModern-Regular',
  		},
  		credit: {
  			text: 'This is my credit',
  			color: '#000',
  			fontSize: '12',
  			fontFamily: 'TimesModern-Regular',
  		},
  		roundel: {
  			x: 470,
  			y: 220,
  			radius: 45,
  			text: '£1 trial for 30 days',
  			fill: '#8a8a8a',
  			fontSize: 15,
  			lineHeight: 18,
  			width: 80,
  			show: true
  		},
  		image: {
  			width: 200,
  			src: 'images/Yosemite.jpg',
  			opacity: 1,
  		}
  	};

  	// Setup SVG
    var s = snapSVG('#svg');

    // Add background
   	s.rect(0, 0, $scope.config.canvas.width, $scope.config.canvas.height, 0, 0).attr({
   		fill: '#eaeaea'
   	});

   	// Image
	var image = s.image($scope.config.image.src, '50%', '50%', 1, 1000);
	image.attr({
		preserveAspectRatio: 'xMinYMin meet',
		opacity: $scope.config.image.opacity
	});
	image.drag();

	var headline;
	headline = s.text(30, 250);
	headline.attr({
		fontFamily: $scope.config.headline.fontFamily,
		fontSize: $scope.config.headline.fontSize,
		textAnchor: 'left',
	});

	var byline;
	byline = s.text(30, 280);
	byline.attr({
		fontFamily: $scope.config.byline.fontFamily,
		fontSize: $scope.config.headline.fontSize,
		textAnchor: 'left',
	});

	var credit;
	credit = s.text(30, 310);
	credit.attr({
		fontFamily: $scope.config.headline.fontFamily,
		fontSize: $scope.config.headline.fontSize,
		textAnchor: 'left',
	});

	$scope.generateLines = function(text, width) {
		var words = text.split(' ');
		var line  = '';
		var lines = [];
		var wordCap = words.length;
		wordCap--;

	    for (var n = 0; n < words.length; n++) {
	      var prevLine = line;
	      var testLine  = line + words[n] + ' ';
		  var lineElem = s.text(0, 0, testLine);
	      var testWidth = lineElem.getBBox().width;

	      if (testWidth > width && n > 0) {
	        line = words[n] + ' ';
	        lines.push(prevLine.trim());
	   	  } else if (n === wordCap) {
	   	  	lines.push(testLine.trim());
	      } else {
	        line = testLine;
	      }

		  lineElem.remove();
	    }
		return lines;
	};

	$scope.renderRoundel = function() {
		// Add roundel
		roundel = s.circle($scope.config.roundel.x, $scope.config.roundel.y, $scope.config.roundel.radius);
		roundel.attr({
			fill: $scope.config.roundel.fill
		});

		var lines = $scope.generateLines($scope.config.roundel.text, $scope.config.roundel.width);

		roundelGroup = s.group(roundel);

	    var lineHeight = $scope.config.roundel.lineHeight;
	    var fontSize = $scope.config.roundel.fontSize;
	    var lineStart = $scope.config.roundel.y - (((lines.length/2)-1)*lineHeight + (lineHeight*0.3));
	    for (var x = 0; x < lines.length; x++) {
	    	var xPos = $scope.config.roundel.x;
	    	var yPos = lineStart + (x*lineHeight);
	    	var svgLine = s.text(xPos, yPos, lines[x]).attr({
				fill: '#FFF',
				fontFamily: 'TimesModern-Regular',
				textAlign: 'center',
				textAnchor: 'middle',
				fontSize: fontSize,
				width: $scope.config.roundel.width
			});
			roundelGroup.group(svgLine);
	    }
		roundelGroup.drag();
	};
	var roundelGroup, roundel;
	$scope.renderRoundel();

	$scope.$watch('config', function() {
		// Headline
		headline.attr({
			text: $scope.config.headline.text,
			fontSize: $scope.config.headline.fontSize,
			fill: $scope.config.headline.color,
		});

		// Byline
		byline.attr({
			text: $scope.config.byline.text,
			fontSize: $scope.config.byline.fontSize,
			fill: $scope.config.byline.color,
		});

		// Credit
		credit.attr({
			text: $scope.config.credit.text,
			fontSize: $scope.config.credit.fontSize,
			fill: $scope.config.credit.color,
		});

		// Image
		image.attr({
			width: $scope.config.image.width,
			opacity: $scope.config.image.opacity
		});

		// Roundel
		if($scope.config.roundel.show && $scope.config.roundel.text !== '') {
			roundelGroup.remove();
			$scope.renderRoundel();
		} else {
			roundelGroup.attr({
				display: 'none',
			});
		}
	}, true);
  });
