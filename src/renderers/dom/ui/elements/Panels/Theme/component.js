// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// Styles
require("./style.scss");

// ThemePanel class
class ThemePanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    const element = e.target;

    this.props.onThemeChange(element.value);
  }

  render() {
    if (!this.props.themes) return null;

    return (
      <div
        className={
          "panel panel--theme" + (this.props.active ? " panel--show" : "")
        }
      >
        <h3>Theme</h3>

        <select defaultValue={this.props.theme} onChange={this.handleUpdate}>
          {Object.keys(this.props.themes).map((name, index) => {
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

ThemePanel.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  themes: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

// Export
module.exports = ThemePanel;
