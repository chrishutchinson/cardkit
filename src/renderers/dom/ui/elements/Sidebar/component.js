// Libraries
const React = require("react");
const PropTypes = require("prop-types");

// Styles
require("./style.scss");

const { Content, Template, Theme, Layout } = require("../panels");
const PanelButton = require("./PanelButton");

// Sidebar class
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    let defaultPanel;
    if (this.props.templates) {
      defaultPanel = "template";
    } else if (this.props.layouts) {
      defaultPanel = "layout";
    } else if (this.props.themes) {
      defaultPanel = "theme";
    } else {
      defaultPanel = "content";
    }

    this.state = {
      panel: defaultPanel,
    };

    this.handleConfigurationChange = this.handleConfigurationChange.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLayoutChange = this.handleLayoutChange.bind(this);
    this.updateConfiguration = this.updateConfiguration.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.isPanel = this.isPanel.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  updateConfiguration() {
    const configuration = this.props.configuration;

    this.props.onConfigurationChange(configuration);
  }

  openPanel(panel) {
    if (panel === this.state.panel) {
      this.props.onSidebarChange(false);
    } else {
      this.props.onSidebarChange(true);
    }

    this.setState({
      panel: panel === this.state.panel ? false : panel,
    });
  }

  isPanel(panel) {
    return this.state.panel === panel;
  }

  handleConfigurationChange(configuration) {
    this.props.onConfigurationChange(configuration);
  }

  handleTemplateChange(template) {
    this.props.onTemplateChange(template);
  }

  handleThemeChange(theme) {
    this.props.onThemeChange(theme);
  }

  handleLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  renderButton(panelName, panelTitle, options) {
    if (!options) return null;

    return (
      <PanelButton
        name={panelName}
        title={panelTitle}
        onClick={this.openPanel}
        active={this.isPanel(panelName)}
      />
    );
  }

  render() {
    return (
      <aside className={"sidebar" + (this.state.panel ? " sidebar--open" : "")}>
        <main className="panels">
          {(() => {
            if (this.props.templates) {
              return (
                <Template
                  templates={this.props.templates}
                  template={this.props.template}
                  active={this.isPanel("template")}
                  onTemplateChange={this.handleTemplateChange}
                />
              );
            }
          })()}

          {(() => {
            if (this.props.layouts) {
              return (
                <Layout
                  layouts={this.props.layouts}
                  layout={this.props.layout}
                  active={this.isPanel("layout")}
                  onLayoutChange={this.handleLayoutChange}
                />
              );
            }
          })()}

          {(() => {
            if (this.props.themes) {
              return (
                <Theme
                  themes={this.props.themes}
                  theme={this.props.theme}
                  configuration={this.props.configuration}
                  active={this.isPanel("theme")}
                  onThemeChange={this.handleThemeChange}
                />
              );
            }
          })()}

          {(() => {
            if (this.props.configuration) {
              return (
                <Content
                  configuration={this.props.configuration}
                  active={this.isPanel("content")}
                  onConfigurationChange={this.handleConfigurationChange}
                />
              );
            }
          })()}
        </main>

        <ul className="buttons">
          {this.renderButton("template", "Template", this.props.templates)}
          {this.renderButton("layout", "Layouts", this.props.layouts)}
          {this.renderButton("theme", "Themes", this.props.themes)}
          {this.renderButton("content", "Content", this.props.configuration)}

          <li className="pull-bottom">
            <button onClick={this.props.onRequestDownload}>Save</button>
          </li>
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  onRequestDownload: PropTypes.func.isRequired,
  onConfigurationChange: PropTypes.func.isRequired,
  onSidebarChange: PropTypes.func.isRequired,
  onThemeChange: PropTypes.func.isRequired,
  onTemplateChange: PropTypes.func.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  configuration: PropTypes.object.isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  themes: PropTypes.object,
  template: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  templates: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  layouts: PropTypes.object,
};

// Export
module.exports = Sidebar;
