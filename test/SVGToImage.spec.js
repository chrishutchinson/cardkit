// Import assertion + helper libs
const chai = require('chai');
const sinon = require('sinon');
const jsdom = require('mocha-jsdom');

// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import SVGToImage
const SVGToImage = require('../src/renderers/dom/svgToImage');

describe('SVGToImage', () => {

  describe('#constructor()', () => {

    // Enable JSDom - this provides us a `document` that simulates the browser environment
    jsdom();

    it('requires an element', () => {
      // Nothing provided
      (() => {
        new SVGToImage();
      }).should.throw(Error, /No element provided/);

      // Boolean provided
      (() => {
        new SVGToImage(true);
      }).should.throw(Error, /Provided element is not a valid element/);

      // String provided
      (() => {
        new SVGToImage('string');
      }).should.throw(Error, /Provided element is not a valid element/);

      // Empty object provided
      (() => {
        new SVGToImage({});
      }).should.throw(Error, /Provided element is not a valid element/);

      // Invalid object provided
      (() => {
        new SVGToImage({
          this: 'is',
          an: 'invalid',
          object: true
        });
      }).should.throw(Error, /Provided element is not a valid element/);

      // Invalid element type provided
      (() => {
        const svgElement = document.createElement('div');
        document.body.appendChild(svgElement);

        new SVGToImage(svgElement);
      }).should.throw(Error, /Invalid element provided/);

      // Valid element provided
      (() => {
        const svgElement = document.createElement('svg');
        document.body.appendChild(svgElement);

        new SVGToImage(svgElement);
      }).should.not.throw(Error);
    });


    it('should store the supplied element', () => {
      const svgElement = document.createElement('svg');
      document.body.appendChild(svgElement);

      const svgToImage = new SVGToImage(svgElement);

      svgToImage.element.should.equal(svgElement);
    });

  });


  describe('#_isValidElement()', () => {
    let svgElement,
        svgToImage;


    // Enable JSDom - this provides us a `document` that simulates the browser environment
    jsdom();


    beforeEach(() => {
      svgElement = document.createElement('svg');
      document.body.appendChild(svgElement);

      svgToImage = new SVGToImage(svgElement);
    });


    it('should return true when given a valid HTML element', () => {

      svgToImage._isValidElement(svgElement).should.be.true;

    });


    it('should return false if given an invalid element', () => {

      svgToImage._isValidElement({
        nodeType: 1,
        nodeName: {}
      }).should.be.false;

      svgToImage._isValidElement({
        nodeType: 2,
        nodeName: 'svg'
      }).should.be.false;

      svgToImage._isValidElement('string').should.be.false;

      svgToImage._isValidElement(null).should.be.false;

      svgToImage._isValidElement().should.be.false;

    });

  });

});