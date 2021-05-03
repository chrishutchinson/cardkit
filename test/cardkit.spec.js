// Import assertion + helper libs
const chai = require('chai');
const sinon = require('sinon');
const jsdom = require('mocha-jsdom');

// Import React libs
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

function requireUncached(module){
  delete require.cache[require.resolve(module)]
  return require(module)
}

// Import CardKit
const CardKit = require('../src/cardkit');
const CardKitDOM = require('../src/renderers/dom/dom');
const CardKitServer = require('../src/renderers/server/server');

describe('cardkit', () => {

  describe('#constructor()', () => {

    it('requires a valid configuration object', () => {
      // Nothing provided
      (() => {
        new CardKit();
      }).should.throw(Error);

      // Boolean provided
      (() => {
        new CardKit(true);
      }).should.throw(Error);

      // String provided
      (() => {
        new CardKit('string');
      }).should.throw(Error);

      // Empty object provided
      (() => {
        new CardKit({});
      }).should.throw(Error);

      // Invalid object provided #1
      (() => {
        new CardKit({
          card: 'string'
        });
      }).should.throw(Error);

      // Invalid object provided #2
      (() => {
        new CardKit({
          card: {
            width: 1000
          }
        });
      }).should.throw(Error);

      // Invalid object provided #3
      (() => {
        new CardKit({
          card: {
            height: 1000
          }
        });
      }).should.throw(Error);

      // Valid object provided
      (() => {
        new CardKit({
          card: {
            width: 800,
            height: 600,
            fill: '#FFF'
          }
        });
      }).should.not.throw(Error);
    });

    it('only accepts valid theme, template and layout objects', () => {
      const validConfiguration = {
        card: {
          width: 800,
          height: 600,
          fill: '#FFF'
        }
      };

      // Invalid themes object provided
      (() => {
        new CardKit(validConfiguration, {
          themes: 'invalid-themes'
        });
      }).should.throw(Error, /Invalid themes configuration object provided/);

      // Invalid templates object provided
      (() => {
        new CardKit(validConfiguration, {
          templates: 'invalid-templates'
        });
      }).should.throw(Error, /Invalid templates configuration object provided/);

      // Invalid layouts object provided
      (() => {
        new CardKit(validConfiguration, {
          layouts: 'invalid-layouts'
        });
      }).should.throw(Error, /Invalid layouts configuration object provided/);
    });

    it('should store the supplied configuration object', () => {
      const configuration = {
        card: {
          width: 800,
          height: 600,
          fill: '#FFF'
        }
      };

      const cardKit = new CardKit(configuration);

      cardKit.configuration.should.equal(configuration);
    });


    it('should store the themes object if one is supplied', () => {
      const configuration = {
        card: {
          width: 800,
          height: 600,
          fill: '#FFF'
        }
      };

      const themes = {
        'Alt': {
          card: {
            fill: '#000'
          }
        }
      };

      const cardKit = new CardKit(configuration, {
        themes: themes
      });

      cardKit.themes.should.equal(themes);
    });


    it('should store the layouts object if one is supplied', () => {
      const configuration = {
        card: {
          width: 800,
          height: 600,
          fill: '#FFF'
        }
      };

      const layouts = {
        'Alt': {
          card: {
            width: 800
          }
        }
      };

      const cardKit = new CardKit(configuration, {
        layouts: layouts
      });

      cardKit.layouts.should.equal(layouts);
    });

  });


  describe('#computeConfiguration()', () => {
    let card,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };


    it('should return the base configuration when no overrides are provided', () => {
      card = new CardKit(configuration);

      card.computeConfiguration().should.deep.equal(configuration);
    });

    it('should return the extended configuration when theme overrides are provided', () => {
      card = new CardKit(configuration, {
        themes: {
          'Alt': {
            card: {
              fill: '#FFF'
            }
          }
        }
      });

      const returnedConfiguration = card.computeConfiguration({
        theme: 'Alt'
      });

      returnedConfiguration.card.fill.should.equal('#FFF');
    });

    it('should return the extended configuration when layout overrides are provided', () => {
      card = new CardKit(configuration, {
        layouts: {
          'Large': {
            card: {
              height: 1000
            }
          }
        }
      });

      const returnedConfiguration = card.computeConfiguration({
        layout: 'Large'
      });

      returnedConfiguration.card.height.should.equal(1000);
    });

    it('should return the extended configuration when both theme and layout overrides are provided', () => {
      card = new CardKit(configuration, {
        layouts: {
          'Large': {
            card: {
              height: 1000
            }
          }
        },
        themes: {
          'Alt': {
            card: {
              fill: '#FFF'
            }
          }
        }
      });

      const returnedConfiguration = card.computeConfiguration({
        layout: 'Large',
        theme: 'Alt'
      });

      returnedConfiguration.card.height.should.equal(1000);
      returnedConfiguration.card.fill.should.equal('#FFF');
    });

  });


  describe('#getRenderers()', () => {

    let card,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };

    jsdom({
      useEach: true
    });

    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);
    });

    it('returns an empty array of renderers if none are set', () => {
      card.getRenderers().should.be.instanceof(Array).and.empty;
    }); 

    it('returns the renderers', () => {
      const renderer = new CardKitDOM(card);

      card.getRenderers().should.be.instanceof(Array).and.have.lengthOf(1);
    }); 

    it('returns the renderers #2', () => {
      document = undefined;
      const serverRenderer = new CardKitServer(card);

      card.getRenderers().should.be.instanceof(Array).and.have.lengthOf(1);
    }); 

  });


  describe('#addRenderer()', () => {
    let card,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };

    jsdom({
      useEach: true
    });

    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);
    });

    it('should add a valid renderer', () => {
      const renderer = new CardKitDOM(card);
      card.renderers = [];

      card.getRenderers().should.be.instanceof(Array).and.be.empty;

      card.addRenderer(renderer);

      card.getRenderers().should.be.instanceof(Array).and.have.length(1);
    });

    it('should throw an error when adding a renderer tied to another instance of CardKit', () => {
      const otherCard = new CardKit(configuration);

      const renderer = new CardKitDOM(otherCard);

      card.getRenderers().should.be.instanceof(Array).and.be.empty;

      (() => {
        card.addRenderer(renderer);
      }).should.throw(Error, /Invalid renderer object provided/);
    });

    it('should throw an error when adding an invalid renderer', () => {
      (() => {
        card.addRenderer({
          cardkit: 'not-a-cardkit-object'
        });
      }).should.throw(Error, /Invalid renderer object provided/);
    });
  });


  describe('#updateConfiguration()', () => {
    let card,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        },
        newConfiguration = {
          card: {
            width: 500,
            height: 100,
            fill: '#FFF'
          },
          layers: {
            text: {
              type: 'text',
              name: 'Text',
              text: '12345',
              x: 0,
              y: 0,
              fill: '#000000'
            }
          }
        },
        newOverrides = {
          themes: {
            'One': {
              layers: {
                text: {
                  fill: '#FFFFFF'
                }
              }
            },
            'Two': {
              layers: {
                text: {
                  fill: '#333333'
                }
              }
            }
          },
          templates: {
            'Template #1': {
              layers: {
                text: {
                  hidden: false
                }
              }
            },
            'Template #2': {
              layers: {
                text: {
                  hidden: true
                }
              }
            }
          },
          layouts: {
            'Rectangle': {
              card: {
                height: 450,
                width: 1000
              }
            },
            'Square': {
              card: {
                height: 1000,
                width: 1000
              }
            }
          }
        }

    jsdom({
      useEach: true
    });

    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);
    });


    it('should change the configuration when called', () => {
      // Call updateConfiguration() providing the new configuration
      card.updateConfiguration(newConfiguration);

      // Assert the card's configuration has been updated
      card.configuration.should.equal(newConfiguration);
    });


    it('should change the overrides when called', () => {
      // Call updateConfiguration() providing the new configuration
      card.updateConfiguration(newConfiguration, newOverrides);

      // Assert the card's theme overrides have been updated
      card.themes.should.equal(newOverrides.themes);

      // Assert the card's template overrides have been updated
      card.templates.should.equal(newOverrides.templates);

      // Assert the card's layout overrides have been updated
      card.layouts.should.equal(newOverrides.layouts);
    });


    it('should rerender each of its attached DOM renderers', () => {
      const domRenderer = new CardKitDOM(card);

      const renderers = card.getRenderers();

      renderers.forEach((renderer) => {
        sinon.stub(renderer, 'rerender');

        // Call updateConfiguration() providing the new configuration
        card.updateConfiguration(newConfiguration);

        // Assert rerender() was called on the renderer
        renderer.rerender.calledOnce.should.be.true;

        renderer.rerender.restore();
      });
    });


    it('should not rerender its attached server renderers', () => {
      // Provide a fake method to verify it doesn't get called
      CardKitServer.prototype.rerender = () => {};

      document = undefined;

      const serverRenderer = new CardKitServer(card);

      const renderers = card.getRenderers();

      renderers.forEach((renderer) => {
        sinon.stub(renderer, 'rerender');

        // Call updateConfiguration() providing the new configuration
        card.updateConfiguration(newConfiguration);

        // Assert rerender() was called on the renderer
        renderer.rerender.notCalled.should.be.true;

        renderer.rerender.restore();
      });

      // Remove our fake method
      CardKitServer.prototype.rerender = null;
    });


    it('should not rerender when the renderer flag is set to false', () => {
      const domRenderer = new CardKitDOM(card);

      const renderers = card.getRenderers();

      renderers.forEach((renderer) => {
        sinon.stub(renderer, 'rerender');

        // Call updateConfiguration() providing the new configuration
        card.updateConfiguration(newConfiguration, false, false);

        // Assert rerender() was called on the renderer
        renderer.rerender.notCalled.should.be.true;

        renderer.rerender.restore();
      });
    });

  });

});