// Libraries
const React = require('react');

// SizeControl class
class SizeControl extends React.Component {

  constructor (props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this._processFile = this._processFile.bind(this);
  }

  handleSelectChange (e) {
    const value = e.target.value;
    this.props.onNewValue('src', value);
  }

  handleFileChange (e) {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    this._processFile(file);
  }

  _processFile (file) {
    const reader = new window.FileReader();

    reader.onload = () => {
      let layer = this.props.layer;
      layer['src'] = reader.result;

      this.props.onNewValue('src', reader.result);
    };

    reader.readAsDataURL(file);
  }

  render () {
    if (!this.props.layer.editable.src) return null;

    // If an object of options is given, create a dropdown
    if (typeof this.props.layer.editable.src === 'object') {
      return (
        <div>
          <strong>Source</strong>
          <select onChange={this.handleSelectChange}>
            {Object.keys(this.props.layer.editable.src).map((index, key) => {
              return (<option key={key}
                value={this.props.layer.editable.src[index]}>
                {index}
              </option>);
            })}
          </select>
        </div>
      );
    }

    // Default behaviour is to show a file upload
    if (this.props.layer.editable.src) {
      return (
        <div>
          <strong>Source</strong>
          <input type="file"
            onChange={this.handleFileChange} />
        </div>
      );
    }
  }

}

SizeControl.propTypes = {
  onNewValue: React.PropTypes.func.isRequired,
  layer: React.PropTypes.object.isRequired
}

// Export
module.exports = SizeControl;
