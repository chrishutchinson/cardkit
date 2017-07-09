// Import assertion + helper libs
const chai = require('chai');
const sinon = require('sinon');
const jsdom = require('mocha-jsdom');
const { ChromePicker, CirclePicker } = require('react-color');

// Import React libs
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const TestUtils = require('react-dom/test-utils');

// Tell chai that we'll be using the "should" style assertions.
const should = chai.should();

// Import ColorControl
const ColorControl = require('../../../../src/renderers/dom/ui/elements/Controls/ColorControl');


describe('ui/elements/ColorControl', () => {

    // Enable JSDom
    jsdom();

    describe('null case', () => {
        it('should be null if layer have no "editable" key', () => {
            const component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={{}}
                onNewValue={() => null} />
            );
            const rendered = ReactDOM.findDOMNode(component);
            should.not.exist(rendered);
        });

        it('should be null if layer.editable does not have `name` key', () => {
            const component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={{editable: {another_name: true}}}
                onNewValue={() => null} />
            );
            const rendered = ReactDOM.findDOMNode(component);
            should.not.exist(rendered);
        });

        it('should be null if layer.editable[`name`] is false', () => {
            const component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={{editable: {test_name: false}}}
                onNewValue={() => null} />
            );
            const rendered = ReactDOM.findDOMNode(component);
            should.not.exist(rendered);
        });

        it('should be null if layer.editable[`name`] is string except for "picker"', () => {
            const componentWithEmptyString = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={{editable: {test_name: ''}}}
                onNewValue={() => null} />
            );
            const componentWithInvalidString = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={{editable: {test_name: 'test_string'}}}
                onNewValue={() => null} />
            );
            const renderedWithEmptyString = ReactDOM.findDOMNode(componentWithEmptyString);
            const renderedWithInvalidString = ReactDOM.findDOMNode(componentWithInvalidString);
            should.not.exist(renderedWithEmptyString);
            should.not.exist(renderedWithEmptyString);
        });

        it('should be null if layer.editable[`name`] is object without "options"', () => {
            const layer = {editable: {test_name: {"without": "options"}}};
            const component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={layer}
                onNewValue={() => null} />
            );
            const rendered  = ReactDOM.findDOMNode(component);
            should.not.exist(rendered);
        });
    });


    describe('CirclePicker case', () => {

        let component,
            rendered,
            callback,
            picker;

        before('render', () => {
            callback = sinon.spy();
            const layer = {
                editable: {
                    test_name: {
                        options: ['black', '#D9E3F0',  '#FFF']
                    }
                }
            };
            component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={layer}
                onNewValue={callback} />
            );
            rendered  = ReactDOM.findDOMNode(component);
        });

        it('should render CirclePicker if layer.editable[`name`] is object with "options"', () => {
            should.exist(rendered);
            picker = TestUtils.findRenderedComponentWithType(
                component,
                CirclePicker
            );

            // No ChromePicker
            (() => {
                TestUtils.findRenderedComponentWithType(
                    component,
                    ChromePicker
                );
            }).should.throw(Error);

            // No input-picker
            rendered.lastChild.tagName.should.not.be.equal("INPUT");
        });

        it('should call onNewValue if onChange triggered ', () => {
            const testColor = "#222222";
            // forced trigger CirclePicker's onChange;
            picker.handleChange(testColor, null);

            callback.withArgs("test_name", testColor).calledOnce.should.be.ok;
        });
    });

    describe('ChromePicker case', () => {

        let component,
            rendered,
            callback,
            picker;

        before('render', () => {
            callback = sinon.spy();
            const layer = {
                editable: {
                    test_name: 'picker'
                }
            };
            component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={layer}
                onNewValue={callback} />
            );
            rendered  = ReactDOM.findDOMNode(component);
        });

        it('should render ChromePicker if layer.editable[`name`] is "picker"', () => {
            should.exist(rendered);
            picker = TestUtils.findRenderedComponentWithType(
                component,
                ChromePicker
            );

            // No CirclePicker
            (() => {
                TestUtils.findRenderedComponentWithType(
                    component,
                    CirclePicker
                );
            }).should.throw(Error);

            // No input picker
            rendered.lastChild.tagName.should.not.be.equal("INPUT");
        });

        it('should call onNewValue if onChange of ChromePicker triggered ', () => {
            const testColor = {hex: "#222222"};
            // forced trigger ChromePicker's onChange;
            picker.handleChange(testColor.hex, null);

            callback.withArgs("test_name", testColor.hex).calledOnce.should.be.ok;
        });
    });

    describe('input-picker case', () => {
        let component,
            rendered,
            callback,
            picker;

        before('render', () => {
            callback = sinon.spy();
            const layer = {
                editable: {
                    test_name: true
                }
            };
            component = TestUtils.renderIntoDocument(
                <ColorControl name='test_name'
                layer={layer}
                onNewValue={callback} />
            );
            rendered  = ReactDOM.findDOMNode(component);
        });

        it('should render input-tag color picker if layer.editable[`name`] is true', () => {
            should.exist(rendered);
            picker = TestUtils.findRenderedDOMComponentWithTag(
                component,
                'input'
            );

            // No CirclePicker
            (() => {
                TestUtils.findRenderedComponentWithType(
                    component,
                    CirclePicker
                );
            }).should.throw(Error);

            // No ChomePicker
            (() => {
                TestUtils.findRenderedComponentWithType(
                    component,
                    ChromePicker
                );
            }).should.throw(Error);
        });
        it("should call onNewValue with args if onChange", () => {
            const testColorHex =  "#222222";
            picker.value = testColorHex;
            TestUtils.Simulate.change(picker);
            callback.withArgs("test_name", testColorHex).calledOnce.should.be.ok;
        });
    });
});
