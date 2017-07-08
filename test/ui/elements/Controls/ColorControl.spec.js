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

// function requireUncached(module){
//     delete require.cache[require.resolve(module)]
//     return require(module)
// }

// Import ColorControl
const ColorControl = require('../../../../src/renderers/dom/ui/elements/Controls/ColorControl');

describe('ui/elements/ColorControl', () => {
    xit ('should fail test', () => {
        (() => {
            'Failed test';
        }).should.throw(Error);
    });

    it ('should pass test', () => {
        (() => {
            'passed test';
        });
    });
});
