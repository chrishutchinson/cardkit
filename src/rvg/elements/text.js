const util = require("util");
const React = require("react");
const PropTypes = require("prop-types");

const DraggableBase = require("./base/draggable");

String.prototype.addSmartQuotes = function () {
  return this.replace(/(\W|^)"(\S)/g, "$1\u201c$2") // beginning "
    .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1\u201d$2") // ending "
    .replace(/([^0-9])"/g, "$1\u201d") // remaining " at end of word
    .replace(/(\W|^)'(\S)/g, "$1\u2018$2") // beginning '
    .replace(/([a-z])'([a-z])/gi, "$1\u2019$2") // conjunction's possession
    .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1\u2019$3") // ending '
    .replace(
      /(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi,
      "\u2019$2$3"
    ) // abbrev. years like '93
    .replace(
      /(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi,
      "$1\u2019"
    ) // backwards apostrophe
    .replace(/'''/g, "\u2034") // triple prime
    .replace(/("|'')/g, "\u2033") // double prime
    .replace(/'/g, "\u2032"); // prime
};

class Text extends DraggableBase {
  render() {
    const {
      x,
      y,
      fill,
      fontSize,
      fontFamily,
      fontWeight,
      textAnchor,
      smartQuotes,
    } = this.props;

    let text = this.props.children;

    let lineHeight = this.props.lineHeight || fontSize;

    if (util.isArray(text)) {
      text = text.map((string, index) => {
        if (true === smartQuotes) {
          string = string.addSmartQuotes();
        }

        return (
          <tspan
            key={index}
            x={x}
            y={lineHeight * index + y}
            alignmentBaseline="before-edge"
          >
            {string}
          </tspan>
        );
      });
    } else {
      if (true === smartQuotes) {
        text = text.addSmartQuotes();
      }
    }

    return (
      <text
        x={x}
        y={y}
        fill={fill}
        textAnchor={textAnchor}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        {...this.draggableProps}
      >
        {text}
      </text>
    );
  }
}

// Prop types
Text.propTypes = {
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  fill: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  textAnchor: PropTypes.string,
};

Text.defaultProps = {
  x: 0,
  y: 0,
  fill: "#000",
  fontSize: 20,
  fontFamily: "serif",
  textAnchor: "start",
};

module.exports = Text;
