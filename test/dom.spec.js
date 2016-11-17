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

// Import CardKit + CardKitDOM
const CardKit = require('../src/cardkit');
const CardKitDOM = require('../src/renderers/dom/dom');

describe('cardkit/dom', () => {

  describe('#constructor()', () => {

    // Enable JSDom
    jsdom({
      useEach: true
    });

    it('requires a valid instance of CardKit', () => {
      // Nothing provided
      (() => {
        new CardKitDOM();
      }).should.throw(Error);

      // Boolean provided
      (() => {
        new CardKitDOM(true);
      }).should.throw(Error);

      // String provided
      (() => {
        new CardKitDOM('string');
      }).should.throw(Error);

      // Empty object provided
      (() => {
        new CardKitDOM({});
      }).should.throw(Error);

      // Invalid object provided #1
      (() => {
        new CardKitDOM({
          card: 'string'
        });
      }).should.throw(Error);

      // Other invalid object type provided
      (() => {
        new CardKitDOM(new Error());
      }).should.throw(Error);

      // Valid object provided
      (() => {
        const cardKit = new CardKit({
          card: {
            width: 800,
            height: 600,
            fill: '#FFF'
          }
        });

        new CardKitDOM(cardKit);
      }).should.not.throw(Error);
    });

    it('throws an error if run outside of a browser environment', () => {
      (() => {
        document = undefined;

        new CardKitDOM();
      }).should.throw(Error, /CardKitDOM can only be used in a browser environment/);
    });

    it('should store the supplied CardKit object', () => {
      const cardKit = new CardKit({
        card: {
          width: 800,
          height: 600,
          fill: '#FFF'
        }
      });

      const renderer = new CardKitDOM(cardKit);

      renderer.cardkit.should.equal(cardKit);
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

    // Enable JSDom
    jsdom({
      useEach: true
    });

    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);

      renderer = new CardKitDOM(card);
    });


    it('should call computeConfiguration() on the CardKit object that was passed into it', () => {
      sinon.stub(card, 'computeConfiguration');

      renderer.computeConfiguration()

      card.computeConfiguration.calledOnce.should.be.true;
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

      renderer = new CardKitDOM(card);

      const returnedConfiguration = renderer.computeConfiguration({
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

      renderer = new CardKitDOM(card);

      const returnedConfiguration = renderer.computeConfiguration({
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

      renderer = new CardKitDOM(card);

      const returnedConfiguration = renderer.computeConfiguration({
        layout: 'Large',
        theme: 'Alt'
      });

      returnedConfiguration.card.height.should.equal(1000);
      returnedConfiguration.card.fill.should.equal('#FFF');
    });

  });
  

  describe('#renderUI()', () => {
    let card,
        renderer,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };


    // Enable JSDom - `renderUI()` requires a DOM
    jsdom({
      useEach: true
    });


    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);
      renderer = new CardKitDOM(card);
    });


    it('should render the UI when called', () => {
      // Setup valid container element
      const appElement = document.createElement('div');
      appElement.setAttribute('id', 'app');
      document.body.appendChild(appElement);

      // Stub ReactDOM.render(), which we'll check gets called
      sinon.stub(ReactDOM, 'render');

      // Render the UI
      renderer.renderUI('app');

      // Assert ReactDOM.render() is called
      ReactDOM.render.calledOnce.should.be.true;

      // Assert ReactDOM.render() gets the DOM element passed in
      ReactDOM.render.calledWithMatch(appElement).should.be.true;

      // Unwrap ReactDOM.render() for use later
      ReactDOM.render.restore();
    });


    it('should return an error when no element ID is provided', () => {
      (() => {
        renderer.renderUI();
      }).should.throw(Error, /Invalid element ID provided/);
    });


    it('should return an error when an invalid element ID is provided', () => {
      (() => {
        renderer.renderUI('non-existant-element');
      }).should.throw(Error, /Invalid element ID provided/);
    });


    it('should store the element ID', () => {
      // Setup valid container element
      const appElement = document.createElement('div');
      appElement.setAttribute('id', 'app');
      document.body.appendChild(appElement);

      // Stub ReactDOM.render(), which we'll check gets called
      sinon.stub(ReactDOM, 'render');

      // Render the UI
      renderer.renderUI('app');

      // Assert the element ID is stored
      renderer.renderedUIID.should.equal('app');

      // Unwrap ReactDOM.render() for use later
      ReactDOM.render.restore();
    });

  });



  describe('#renderCard()', () => {
    let card,
        renderer,
        configuration = {
          card: {
            width: 1000,
            height: 462,
            fill: '#4da5bd'
          }
        };


    // Enable JSDom - `renderCard()` requires a DOM
    jsdom({
      useEach: true
    });

    
    beforeEach(() => {
      // Create a new CardKit object before every test.
      card = new CardKit(configuration);
      renderer = new CardKitDOM(card);
    });


    it('should render the card when called', () => {
      // Setup valid container element
      const appElement = document.createElement('div');
      appElement.setAttribute('id', 'card');
      document.body.appendChild(appElement);

      // Stub ReactDOM.render(), which we'll check gets called
      sinon.stub(ReactDOM, 'render');

      // Render the card
      renderer.renderCard('card');

      // Assert ReactDOM.render() is called
      ReactDOM.render.calledOnce.should.be.true;

      // Assert ReactDOM.render() gets the DOM element passed in
      ReactDOM.render.calledWithMatch(appElement).should.be.true;

      // Unwrap ReactDOM.render() for use later
      ReactDOM.render.restore();
    });


    it('should return an error when no element ID is provided', () => {
      (() => {
        renderer.renderCard();
      }).should.throw(Error, /Invalid element ID provided/);
    });


    it('should return an error when an invalid element ID is provided', () => {
      (() => {
        renderer.renderCard('non-existant-element');
      }).should.throw(Error, /Invalid element ID provided/);
    });


    it('should store the element ID', () => {
      // Setup valid container element
      const appElement = document.createElement('div');
      appElement.setAttribute('id', 'card');
      document.body.appendChild(appElement);

      // Stub ReactDOM.render(), which we'll check gets called
      sinon.stub(ReactDOM, 'render');

      // Render the card
      renderer.renderCard('card');

      // Assert the element ID is stored
      renderer.renderedCardID.should.equal('card');

      // Unwrap ReactDOM.render() for use later
      ReactDOM.render.restore();
    });

  });

  describe('#download()', () => {

  });

});