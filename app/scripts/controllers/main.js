'use strict';

/**
 * @ngdoc function
 * @name cardkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardkitApp
 */
angular.module('cardkitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.themes = [
      {
        name: 'Red Box',
        backgroundColor: '#000000',
        foregroundColor: '#000000',
      },{
        name: 'Times Sport',
        backgroundColor: '#660000',
        foregroundColor: '#FFFFFF',
      },
    ]; 

    $scope.theme = {
      name: 'Default Theme',
      backgroundColor: '#FFFFFF',
      foregroundColor: '#660000',
    };

    $scope.$watch('theme', function() {
      $scope.$broadcast('changeTheme');
    });

    $scope.config = {
  		canvas: {
  			height: 335,
  			width: 600,
  			fill: function() {
          return $scope.theme.backgroundColor;
        },
  		},
  		elements: [
        {
          name: 'Image',
          type: 'image',
          width: 200,
          height: 1000,
          src: 'images/Yosemite.jpg',
          opacity: 1,
          x: '50%',
          y: '50%',
          preserveAspectRatio: 'xMinYMin meet',
          draggable: true,
          editable: {
            src: {}
          }
        },
  			{
  				name: 'Headline',
  				type: 'text',
  				text: 'This is my headline',
  				fill: function() {
            return $scope.theme.foregroundColor;
          },
  				fontSize: '26',
  				fontFamily: 'TimesModern-Regular',
  				textAnchor: 'left',
  				x: 30,
  				y: 250,
          draggable: true,
  				editable: {
  					'text': {},
  					'fill': {
  						opts: {
  							'Black': '#000000',
  							'Grey': '#6B6B6B',
  							'White': '#FFFFFF',
  						},
  					},
  					'fontSize': {
  						opts: {
  							'22px': '22',
  							'26px': '26',
  							'36px': '36',
  							'44px': '44',
  						},
  					},
  					'fontFamily': {
  						opts: {
  							'Times Modern - Regular': 'TimesModern-Regular',
  							'Georgia': 'Georgia',
  						},
  					}
  				},
  			},
  			{
  				name: 'Byline',
  				type: 'text',
  				text: 'This is my byline',
  				fill: '#000000',
  				fontSize: '16',
  				fontFamily: 'TimesModern-Regular',
  				textAnchor: 'left',
  				x: 30,
  				y: 280,
  				editable: {
  					'text': {},
  					'fill': {
  						opts: {
  							'Black': '#000000',
  							'Grey': '#6B6B6B',
  							'White': '#FFFFFF',
  						},
  					},
  					'fontSize': {
  						opts: {
  							'16px': '16',
  							'22px': '22',
  							'26px': '26',
  							'36px': '36',
  						},
  					},
  					'fontFamily': {
  						opts: {
  							'Times Modern - Regular': 'TimesModern-Regular',
  							'Georgia': 'Georgia',
  						},
  					}
  				},
  			},
  			{
  				name: 'Credit',
  				type: 'text',
  				text: 'This is my credit',
  				fill: '#000000',
  				fontSize: '12',
  				fontFamily: 'TimesModern-Regular',
  				textAnchor: 'left',
  				x: 30,
  				y: 300,
  				editable: {
  					'text': {},
  					'fill': {
  						opts: {
  							'Black': '#000000',
  							'Grey': '#6B6B6B',
  							'White': '#FFFFFF',
  						},
  					},
  					'fontSize': {
  						opts: {
  							'12px': '12',
  							'16px': '16',
  						},
  					},
  					'fontFamily': {
  						opts: {
  							'Times Modern - Regular': 'TimesModern-Regular',
  							'Georgia': 'Georgia',
  						},
  					}
  				},
  			},
  			{
  				type: 'group',
  				name: 'Roundel',
  				x: 470,
  				y: 220,
  				draggable: true,
  				elements: [
  					{
  						type: 'circle',
		  				radius: 45,
		  				fill: '#8a8a8a',
		  				editable: {
		  					'fill': {
		  						opts: {
		  							'Black': '#000000',
		  							'Dark Grey': '#8a8a8a',
		  							'White': '#FFFFFF',
		  						}
		  					}
		  				}
	  				},
	  				{
		  				type: 'text',
		  				lineBreaks: true,
		  				text: '£1 for 30 days free trial',
		  				fill: '#FFFFFF',
		  				fontSize: '15',
		  				fontFamily: 'TimesModern-Regular',
		  				textAnchor: 'middle',
		  				editable: {
		  					'fill': {
		  						opts: {
		  							'Black': '#000000',
		  							'Grey': '#6B6B6B',
		  							'White': '#FFFFFF',
		  						},
		  					},
		  				},
		  			},
  				],
  			},
  			/*{
  				type: 'rect',
  				height: 100,
  				width: 100,
  				x: 10,
  				y: 100,
  				fill: '#bababa',
  				draggable: true,
  			},*/
  		],
  	};

    // Drop handler.
    $scope.onDrop = function (data, event, key) {
      var dataTransfer = getDataTransfer(event);
      readFile(dataTransfer.files[0], key);
    };

    // Read the supplied file (from DataTransfer API)
    function readFile(file, key) {
      var reader = new FileReader();

      reader.onload = function() { 
        $scope.config.elements[key].src = reader.result;
        $scope.$apply();
      };

      reader.readAsDataURL(file);
    }

    // Get the data transfer
    function getDataTransfer(event) {
      event.stopPropagation();
      event.preventDefault();
      return event.dataTransfer || null;
    }
/*
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
	}, true);*/
  });
