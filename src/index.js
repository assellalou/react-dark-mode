import React, { Component } from "react";
import { render } from "react-dom";

class Container extends Component {
  componentDidMount() {
    this.setState({
      themeState: "Light",
      styleState: { color: "#555555", background: "#FFFFFF" },
      otherThemeState: "Dark",
    });
  }

  toggleTheme = () => {
    if (this.state.themeState === "Dark") {
      this.setState({
        themeState: "Light",
        styleState: { color: "#555555", background: "#FFFFFF" },
        otherThemeState: "Dark",
      });
    }
    if (this.state.themeState === "Light") {
      this.setState({
        themeState: "Dark",
        styleState: { color: "#F9FFEE", background: "#222831" },
        otherThemeState: "Light",
      });
    }
  };
  render() {
    const { themeState, styleState, otherThemeState } = this.state || {};
    return (
      <div style={styleState} className={themeState + " container-fluid"}>
        <button onClick={this.toggleTheme} className="toggleTheme">
          {otherThemeState}
        </button>
      </div>
    );
  }
}
render(<Container></Container>, document.querySelector("#root"));
