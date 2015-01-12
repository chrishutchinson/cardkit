'use strict';

/**
 * @ngdoc function
 * @name cardkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardkitApp
 */
angular.module('cardkitApp')
  .controller('MainCtrl', function ($scope, saveSvgAsPng) {
    $scope.themes = [
      {
        name: 'Red Box',
        background: '#aec1d0',
        headline: '#183a54',
        byline: '#ffffff',
        quote: '#183a54',
        credit: '#000000',
        headlineFont: '"TimesModernCondensed-Regular"',
        nameFont: '"TimesModernCondensed-Regular"',
        font: '"TimesModernCondensed-Regular"',
        roundelBackground: '#000000',
        roundelColor: '#FFFFFF',
        logoSrc: 'data:image/png;base64,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'
      },
      {
        name: 'Times Sport',
        backgroundColor: '#660000',
        foregroundColor: '#FFFFFF',
        logoSrc: 'dfs',
      },
    ]; 

    $scope.theme = $scope.themes[0];

    $scope.$watch('theme', function() {
      $scope.$broadcast('changeTheme');
    });

    $scope.config = {
  		canvas: {
  			height: 335,
  			width: 600,
  			fill: function() {
          return $scope.theme.background;
        },
  		},
  		elements: [
        {
          name: 'Logo',
          type: 'image',
          width: 250,
          height: function() {
            return this.width;
          },
          src: function() {
            return $scope.theme.logoSrc;
          },
          opacity: 1,
          x: '30',
          y: '260',
          preserveAspectRatio: 'xMinYMin meet',
          editable: false
        },
        {
          name: 'Image',
          type: 'image',
          width: 200,
          height: function() {
            return this.width;
          },
          src: '',
          opacity: 1,
          x: '50%',
          y: '50%',
          preserveAspectRatio: 'xMinYMin meet',
          draggable: true,
          editable: {
            src: true,
            width: true,
          }
        },
        {
          type: 'group',
          name: 'Headline',
          x: 30,
          y: 90,
          elements: [
            {
              name: 'Quote',
              type: 'text',
              text: '“',
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: '76',
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'left',
              x: 30,
              y: 90,
              editable: {},
            },
            {
              name: 'Headline',
              type: 'text',
              text: 'This is my headline',
              fill: function() {
                return $scope.theme.quote;
              },
              fontSize: '26',
              fontFamily: function() {
                return $scope.theme.headlineFont;
              },
              textAnchor: 'left',
              x: 55,
              y: 55,
              editable: {
                'text': {},
                /*'fill': {
                  opts: {
                    'Black': '#000000',
                    'Grey': '#6B6B6B',
                    'White': '#FFFFFF',
                  },
                },*/
                /*'fontSize': {
                  opts: {
                    '22px': '22',
                    '26px': '26',
                    '36px': '36',
                    '44px': '44',
                  },
                },*/
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
        /*{
          name: 'Quote',
          type: 'text',
          text: '“',
          fill: function() {
            return $scope.theme.quote;
          },
          fontSize: '76',
          fontFamily: function() {
            return $scope.theme.headlineFont;
          },
          textAnchor: 'left',
          x: 30,
          y: 90,
          editable: {},
        },*/
  			{
  				name: 'Byline',
  				type: 'text',
  				text: 'This is my byline',
  				fill: function() {
            return $scope.theme.byline;
          },
  				fontSize: '22',
  				fontFamily: function() {
            return $scope.theme.nameFont;
          },
  				textAnchor: 'left',
  				x: 55,
          y: 90,
  				editable: {
  					'text': {},
  					'fontSize': {
  						opts: {
  							'16px': '16',
  							'22px': '22',
  							'26px': '26',
  							'36px': '36',
  						},
  					},
  				},
  			},
  			{
  				name: 'Credit',
  				type: 'text',
  				text: 'This is my credit',
  				fill: function() {
            return $scope.theme.credit;
          },
  				fontSize: '18',
  				fontFamily: function() {
            return $scope.theme.nameFont;
          },
  				textAnchor: 'left',
          x: 55,
          y: 120,
  				editable: {
  					'text': true,
  					'fontSize': {
  						opts: {
  							'18px': '18',
  							'22px': '22',
  						},
  					},
  				},
  			},
  			/*{
  				type: 'group',
  				name: 'Roundel',
  				x: 470,
  				y: 220,
  				draggable: true,
  				elements: [
  					{
  						type: 'circle',
		  				radius: 45,
		  				fill: function() {
                return $scope.theme.roundelBackground;
              },
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
		  				fill: function() {
                return $scope.theme.roundelColor;
              },
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

    $scope.removeImage = function(key) {
      $scope.config.elements[key].src = '';
    };


    $scope.downloadSvg = function() {
      saveSvgAsPng(document.getElementById('snap-svg'), 'image.png');
    };
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
