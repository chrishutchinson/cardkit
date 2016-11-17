// Libraries
const React = require('react');

// Styles
require('./style.scss');

// Require in our controls
const TextControl = require('../Controls/TextControl');
const SizeControl = require('../Controls/SizeControl');
const ColorControl = require('../Controls/ColorControl');
const SourceControl = require('../Controls/SourceControl');

// LayerConfig class
class LayerConfig extends React.Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (property, value) {
    let layer = this.props.layer;
    layer[property] = value;

    this.props.onUpdate(this.props.layerKey, layer);
  }

  render () {
    return (
      <div className="layer-config">
        <h3>{this.props.layer.name}</h3>

        <div className="element-config">
          <div>
            {/** Text **/}
            <TextControl layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Font Size **/}
            <SizeControl name="fontSize"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Height **/}
            <SizeControl name="height"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Width **/}
            <SizeControl name="width"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Radius **/}
            <SizeControl name="radius"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Radius X **/}
            <SizeControl name="radiusX"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Radius X **/}
            <SizeControl name="radiusY"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** X **/}
            <SizeControl name="x"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Y **/}
            <SizeControl name="y"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** X1 **/}
            <SizeControl name="x1"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** X2 **/}
            <SizeControl name="x2"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Y1 **/}
            <SizeControl name="y1"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Y2 **/}
            <SizeControl name="y2"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Fill **/}
            <ColorControl name="fill"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Stroke **/}
            <ColorControl name="stroke"
              layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Source **/}
            <SourceControl layer={this.props.layer}
              onNewValue={this.handleChange} />

            {/** Opacity **/}
            <SizeControl name="opacity"
              min={0}
              max={1}
              step={0.1}
              layer={this.props.layer}
              onNewValue={this.handleChange} />
          </div>
        </div>

      </div>
    );
  }

}

LayerConfig.propTypes = {
  onUpdate: React.PropTypes.func.isRequired,
  layer: React.PropTypes.object.isRequired,
  layerKey: React.PropTypes.string.isRequired
}

// Export
module.exports = LayerConfig;
