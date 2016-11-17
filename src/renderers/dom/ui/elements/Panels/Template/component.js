// Libraries
const React = require('react');
const CardTemplate = require('./CardTemplate');

// Styles
require('./style.scss');

// TemplatePanel class
class TemplatePanel extends React.Component {

  constructor (props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdateFromImage = this.handleUpdateFromImage.bind(this);
  }

  handleUpdate (e) {
    const element = e.target;

    this.props.onTemplateChange(element.value);
  }

  handleUpdateFromImage (name, e) {
    this.props.onTemplateChange(name);
  }

  render () {
    if (!this.props.templates) return null;

    let allHavePreviewImages = true;
    Object.keys(this.props.templates).forEach((name, index) => {
      if (!this.props.templates[name].previewImage) {
        allHavePreviewImages = false;
      }
    });

    if (allHavePreviewImages) {
      return (
        <div className={'panel panel--template' + (this.props.active ? ' panel--show' : '')}>
          <h3>Template</h3>

          <ul>
            {Object.keys(this.props.templates).map((name, index) => {
              return (<CardTemplate key={index}
                name={name}
                template={this.props.template}
                onClick={this.handleUpdateFromImage}>
                <img src={this.props.templates[name].previewImage} />
                <h5>{name}</h5>
              </CardTemplate>);
            })}
          </ul>

        </div>
      );
    }

    return (
      <div className={'panel panel--template' + (this.props.active ? ' panel--show' : '')}>
        <h3>Template</h3>

        <select defaultValue={this.props.template} onChange={this.handleUpdate}>
          {Object.keys(this.props.templates).map((name, index) => {
            return (<option key={index} value={name}>{name}</option>);
          })}
        </select>

      </div>
    );
  }

}
TemplatePanel.propTypes = {
  template: React.PropTypes.string.isRequired,
  onTemplateChange: React.PropTypes.func.isRequired,
  templates: React.PropTypes.object.isRequired,
  active: React.PropTypes.bool
}

// Export
module.exports = TemplatePanel;
