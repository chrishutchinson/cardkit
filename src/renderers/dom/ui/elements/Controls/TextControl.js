// Libraries
const React = require('react');

// TextControl class
class TextControl extends React.Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    let element = e.target;
    this.props.onNewValue('text', element.value);
  }

  render () {
    if (!this.props.layer.editable.text) return null;

    if (typeof this.props.layer.editable.text === 'object') {
      if (this.props.layer.editable.text.options) {
        // We have a select instead of a free-input
        return (
          <div>
            <strong>Text</strong>
            <select defaultValue={this.props.layer.text}
              onChange={this.handleChange}>
              {this.props.layer.editable.text.options.map((option, index) => {
                return (<option key={index} value={option}>{option}</option>);
              })}
            </select>
          </div>
        );
      }

      // We have some config
      const config = {
        maxLength: this.props.layer.editable.text.max || null
      };

      return (
        <div>
          <strong>Text</strong>
          <textarea {...config}
            value={this.props.layer.text}
            onChange={this.handleChange} />
        </div>
      );
    }

    if (this.props.layer.editable.text === true) {
      return (
        <div>
          <strong>Text</strong>
          <textarea value={this.props.layer.text}
            onChange={this.handleChange} />
        </div>
      );
    }
  }

}

TextControl.propTypes = {
  onNewValue: React.PropTypes.func.isRequired,
  layer: React.PropTypes.object.isRequired
}

// Export
module.exports = TextControl;
