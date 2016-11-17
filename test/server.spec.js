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
const CardKitServer = require('../src/renderers/server/server');

describe('cardkit/server', () => {

  describe('#constructor()', () => {

    it('requires a valid instance of CardKit', () => {
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

    it('should store the supplied CardKit object', () => {
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

  });


  describe('#computeConfiguration()', () => {
    let card,
        renderer,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };

    it('should return the base configuration when no options are provided', () => {
      card = new CardKit(configuration);
      renderer = new CardKitServer(card);

      renderer.computeConfiguration().should.deep.equal(configuration);
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


  describe('#renderToString()', () => {
    let card,
        renderer,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };
    
    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);
      renderer = new CardKitServer(card);
    });

    it('should return call ReactDOMServer.renderToString', () => {
      sinon.stub(ReactDOMServer, 'renderToString');

      renderer.renderToString();

      ReactDOMServer.renderToString.calledOnce.should.be.true;

      ReactDOMServer.renderToString.restore();
    });

    it('should return a string', () => {
      const stub = sinon.stub(ReactDOMServer, 'renderToString');
      stub.returns('string');

      const string = renderer.renderToString();

      string.should.equal('string');
      
      ReactDOMServer.renderToString.restore();
    });

  });


});