// Libraries
const React = require('react');
const { ChromePicker, CirclePicker } = require('react-color');
const helpers = require('../../../../../helpers');

// ColorControl class
class ColorControl extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleChange (e) {
    let element = e.target;
    this.props.onNewValue(this.props.name, element.value);
  }

  handleColorChange (color) {
    this.props.onNewValue(this.props.name, color.hex);
  }

  render () {
    if (!this.props.layer.editable[this.props.name]) return null;

    if (typeof this.props.layer.editable[this.props.name] === 'object' && this.props.layer.editable[this.props.name].options) {
      return (
        <div>
          <strong>Fill</strong>
          <CirclePicker color={this.props.layer[this.props.name]}
            colors={this.props.layer.editable[this.props.name].options}
            onChange={this.handleColorChange} />
        </div>
      );
    }

    if (this.props.layer.editable[this.props.name] === 'picker') {
      return (
        <div>
          <strong>{helpers.capitaliseFirstLetter(this.props.name)}</strong>
          <ChromePicker color={this.props.layer[this.props.name]}
            onChange={this.handleColorChange} />
        </div>
      );
    }

    if (this.props.layer.editable[this.props.name] === true) {
      return (
        <div>
          <strong>{helpers.capitaliseFirstLetter(this.props.name)}</strong>
          <input type="text"
            value={this.props.layer[this.props.name]}
            onChange={this.handleChange} />
        </div>
      );
    }

    return null;
  }

}

ColorControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  onNewValue: React.PropTypes.func.isRequired,
  layer: React.PropTypes.object.isRequired
}

// Export
module.exports = ColorControl;
