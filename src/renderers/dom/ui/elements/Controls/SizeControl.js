// Libraries
const React = require('react');
const helpers = require('../../../../../helpers');

// SizeControl class
class SizeControl extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    let element = e.target;
    this.props.onNewValue(this.props.name, element.value);
  }

  render () {
    if (!this.props.layer.editable[this.props.name]) return null;

    if (typeof this.props.layer.editable[this.props.name] === 'object' || (this.props.min || this.props.max || this.props.step)) {
      // We have some config

      const config = {
        min: this.props.layer.editable[this.props.name].min || this.props.min || 0,
        max: this.props.layer.editable[this.props.name].max || this.props.max || null,
        step: this.props.layer.editable[this.props.name].step || this.props.step || 1
      };

      config.type = (config.max ? 'range' : 'number');

      return (
        <div>
          <strong>{helpers.capitaliseFirstLetter(this.props.name)} <code>{this.props.layer[this.props.name]}</code></strong>
          <input {...config}
            value={this.props.layer[this.props.name]}
            onChange={this.handleChange} />
        </div>
      );
    }

    if (this.props.layer.editable[this.props.name] === true) {
      return (
        <div>
          <strong>{helpers.capitaliseFirstLetter(this.props.name)} <code>{this.props.layer[this.props.name]}</code></strong>
          <input type="number"
            min="0"
            step="1"
            value={this.props.layer[this.props.name]}
            onChange={this.handleChange} />
        </div>
      );
    }
  }

}

SizeControl.propTypes = {
  name: React.PropTypes.string.isRequired,
  onNewValue: React.PropTypes.func.isRequired,
  layer: React.PropTypes.object.isRequired,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  type: React.PropTypes.string
}

// Export
module.exports = SizeControl;
