// Libraries
const React = require('react');

const LayerConfig = require('../../LayerConfig/component');

// Styles
require('./style.scss');

// Content class
class ContentPanel extends React.Component {

  constructor (props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate (name, element) {
    let configuration = this.props.configuration;
    configuration.layers[name] = element;

    this.props.onConfigurationChange(configuration);
  }

  getLayerValue (layer, key, layers) {
    if (typeof layer[key] === 'function') {
      return layer[key](layers);
    }

    return layer[key];
  }

  render () {
    let elements = [];

    const { layers } = this.props.configuration;

    Object.keys(layers).forEach((key) => {
      const layer = layers[key];

      if (this.getLayerValue(layer, 'hidden', layers) === true) return;

      if (this.getLayerValue(layer, 'editable', layers)) {
        elements.push(<LayerConfig key={key} layerKey={key} onUpdate={this.handleUpdate} layer={layer} />);
      }
    });

    return (
      <div className={'panel panel--content' + (this.props.active ? ' panel--show' : '')}>
        <h3>Layers</h3>
        {elements}

      </div>
    );
  }

}

ContentPanel.propTypes = {
  onConfigurationChange: React.PropTypes.func.isRequired,
  configuration: React.PropTypes.object.isRequired,
  active: React.PropTypes.bool
}

// Export
module.exports = ContentPanel;
