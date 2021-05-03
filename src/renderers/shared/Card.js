// Libraries
const React = require('react');

// RVG Elements
const {
  SVG,
  Text,
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Image,
  Path,
  LinearGradient
} = require('rvg.js');

/**
 * @name Card
 * @class The Card React element
 */
class Card extends React.Component {

  /**
   * Calculates the Y position of an element based on any attachments etc.
   *
   * @param {object} layers - The object of all layers
   * @param {object} layer - The layer to calculate the Y position for
   *
   * @return {integer} The Y position
   */
  calculateYPosition (layers, layer) {
    // Get the layer's currently configured Y position
    let attachYLayerPosition = this.getLayerValue(layers, layer, 'y');

    // If this is an object and has the attach property
    if (typeof attachYLayerPosition === 'object' && attachYLayerPosition.attach !== 'undefined') {
      // Get the layer to attach to
      let attachYLayer = layers[layer.y.attach];

      // Calculate the Y offset
      let attachYLayerHeight = 0;
      switch (attachYLayer.type) {
        case 'text':
          let attachYLayerText = attachYLayer.text.split('\n');
          if (attachYLayer.text !== '') {
            attachYLayerHeight = (attachYLayerText.length * (this.getLayerValue(layers, attachYLayer, 'lineHeight') || this.getLayerValue(layers, attachYLayer, 'fontSize')));
          }
          break;
        default:
          if (typeof this.getLayerValue(layers, attachYLayer, 'height') !== 'undefined') {
            attachYLayerHeight = this.getLayerValue(layers, attachYLayer, 'height');
          }
          break;
      }

      // Add any additionally configured offset value
      let attachYLayerOffset = (layer.y.offset || 0);

      // Add them together and recursively call this function if the next layer has an attachment
      attachYLayerPosition = attachYLayerHeight + this.calculateYPosition(layers, attachYLayer) + attachYLayerOffset;
    }

    // Return the value
    return attachYLayerPosition;
  }

  /**
   * Returns the value for a given layer property
   *
   * @param {object} layers - The object of all layers
   * @param {object} layer - The layer to get the value for
   * @param {object} key - The key of the value to get from the layer
   *
   * @return {mixed} The value of the property on the layer
   */
  getLayerValue (layers, layer, key) {
    if (typeof layer[key] === 'function') {
      return layer[key](layers, this.refs.svg);
    }

    return layer[key];
  }

  /**
   * Compute the gradient elements to render to the <defs> element
   *
   * @param {object} layers - The configuration object representing the layers that may require gradients
   *
   * @return {array} An array of React elements to render to the <defs> element
   */
  computeGradients (layers) {
    const array = [];
    let layer, gradient;

    Object.keys(layers).forEach((key) => {
      layer = layers[key];

      if (this.getLayerValue(layers, layer, 'gradient')) {
        gradient = this.getLayerValue(layers, layer, 'gradient');

        array.push(<LinearGradient key={key}
          name={key}
          x1={0} x2={0}
          y1={0} y2={1}
          stops={gradient} />);
      }
    });

    return array;
  }

  /**
   * Compute the layers to render on the Card
   *
   * @param {object} layers - The configuration object representing the layers to render
   *
   * @return {array} An array of React elements to render on the card
   */
  computeLayers (layers) {
    const array = [];
    let layer;

    // Iterate over the layers
    Object.keys(layers).forEach((key) => {
      layer = layers[key];

      // If the layer is hidden, ignore it
      if (this.getLayerValue(layers, layer, 'hidden') === true) {
        return;
      };

      // Setup an object to contain our layer data
      const layerData = {};

      // Iterate over the properties of the layer, and compute the value (handles getters, functions, and object implementations such as `y`)
      Object.keys(layer).forEach((k) => {
        layerData[k] = this.getLayerValue(layers, layer, k);
      });

      // Make the fill value map to a gradient name, if a gradient has been configured
      // See computeGradients() for the creation of gradient definitions
      if (this.getLayerValue(layers, layer, 'gradient')) {
        layerData.fill = `url(#${key})`;
      }

      // Switch over the layer type to ensure we create the card correctly
      switch (layer.type) {
        case 'text':
          // Split by newline
          const text = layerData.text.split('\n');

          array.push(<Text x={layerData.x}
            y={this.calculateYPosition(layers, layerData)}
            fontFamily={layerData.fontFamily}
            fontSize={layerData.fontSize}
            fontWeight={layerData.fontWeight}
            lineHeight={layerData.lineHeight}
            textAnchor={layerData.textAnchor}
            fill={layerData.fill}
            draggable={layerData.draggable}
            transform={layerData.transform}
            opacity={layerData.opacity}
            smartQuotes={layerData.smartQuotes}
            key={key}>
            {text}
          </Text>);
          break;
        case 'image':
          array.push(<Image x={layerData.x}
            y={this.calculateYPosition(layers, layerData)}
            href={layerData.src}
            height={layerData.height}
            width={layerData.width}
            draggable={layerData.draggable}
            transform={layerData.transform}
            opacity={layerData.opacity}
            key={key} />);
          break;
        case 'rectangle':
          array.push(<Rectangle x={layerData.x}
            y={this.calculateYPosition(layers, layerData)}
            fill={layerData.fill}
            height={layerData.height}
            width={layerData.width}
            draggable={layerData.draggable}
            transform={layerData.transform}
            key={key} />);
          break;
        case 'circle':
          array.push(<Circle x={layerData.x}
            y={this.calculateYPosition(layers, layerData)}
            fill={layerData.fill}
            radius={layerData.radius}
            draggable={layerData.draggable}
            transform={layerData.transform}
            key={key} />);
          break;
        case 'ellipse':
          array.push(<Ellipse x={layerData.x}
            y={this.calculateYPosition(layers, layerData)}
            fill={layerData.fill}
            radiusX={layerData.radiusX}
            radiusY={layerData.radiusY}
            draggable={layerData.draggable}
            transform={layerData.transform}
            key={key} />);
          break;
        case 'line':
          array.push(<Line x={[layerData.x1, layerData.x2]}
            y={[layerData.y1, layerData.y2]}
            stroke={layerData.stroke || layerData.fill}
            draggable={layerData.draggable}
            transform={layerData.transform}
            key={key} />);
          break;
        case 'path':
          array.push(<Path d={layerData.path || layerData.d}
            fill={layerData.fill}
            draggable={layerData.draggable}
            transform={layerData.transform}
            key={key} />)
          break;
      }
    });

    return array;
  }

  /**
   * Compute the fonts needed for the card
   *
   * @param {object} fonts - The fonts to use when rendering this card
   *
   * @return {array} An array of React elements to render in the <defs /> element of the SVG
   */
  computeFonts (fonts = {}) {
    return Object.keys(fonts).map((key, index) => {
      let src = fonts[key];
      let format = 'svg';
      if (typeof fonts[key] === 'object') {
        src = fonts[key].src;
        format = fonts[key].format || 'svg';
      }

      return (
        <style key={index}>
          {`@font-face {
              font-family: '${key}';
              src: url("${src}") format("${format}");
              font-weight: normal;
              font-style: normal;
          }`}
        </style>
      );
    });
  }

  /**
   * Renders the card
   *
   * @return {object} JSX for the React Component
   */
  render () {
    // Grab our configuration
    const { card, fonts, layers } = this.props.configuration;

    // Compute layers, gradients and fonts
    const layerArray = this.computeLayers(layers);
    const gradientsArray = this.computeGradients(layers);
    const fontsArray = this.computeFonts(fonts);

    // Return
    return (
      <div className="card" ref="svg" style={{maxWidth: card.width, maxHeight: card.height}}>
        <SVG height={card.height} width={card.width} fill={card.fill}>

          <defs>
            {fontsArray}
            {gradientsArray}
          </defs>

          {layerArray}

        </SVG>
      </div>
    );
  }

}

Card.propTypes = {
  configuration: React.PropTypes.shape({
    card: React.PropTypes.object,
    fonts: React.PropTypes.object,
    layers: React.PropTypes.object
  })
}

// Export
module.exports = Card;
