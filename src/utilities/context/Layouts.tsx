import React, { createContext } from "react";

import VerticalLayout from "../../layouts/VerticalLayout";

import themeConfig from "../../configs/themeConfigs";

interface AppContextInterface {
  state: Object;
  verticalLayout: any;
  switchLayout: Function;
  switchDir: Function;
}

const layouts = {
  verticalLayout: VerticalLayout,
};
const ContextLayout = createContext<AppContextInterface>({
  state: {
    activeLayout: "vertical",
    width: window.innerWidth,
    lastLayout: null,
    direction: themeConfig.direction,
  },

  verticalLayout: layouts["verticalLayout"],

  switchLayout: () => {},
  switchDir: () => {},
});

class Layout extends React.Component<any, any> {
  state = {
    activeLayout: "vertical",
    width: window.innerWidth,
    lastLayout: null,
    direction: themeConfig.direction,
  };

  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  handleWindowResize = () => {
    this.updateWidth();
    if (this.state.activeLayout === "horizontal" && this.state.width <= 1199) {
      this.setState({
        activeLayout: "vertical",
        lastLayout: "horizontal",
      });
    }

    if (this.state.lastLayout === "horizontal" && this.state.width >= 1199) {
      this.setState({
        activeLayout: "horizontal",
        lastLayout: "vertical",
      });
    }
  };

  componentDidMount() {
    // window.addEventListener("resize", this.handleWindowResize);

    this.handleDirUpdate();
    if (this.state.activeLayout === "horizontal" && this.state.width <= 1199) {
      this.setState({
        activeLayout: "vertical",
      });
    } else if (
      themeConfig.layout === "horizontal" &&
      this.state.width >= 1200
    ) {
      this.setState({
        activeLayout: "horizontal",
      });
    } else {
      this.setState({
        activeLayout: "vertical",
      });
    }
  }

  componentDidUpdate() {
    this.handleDirUpdate();
  }

  handleDirUpdate = () => {
    let dir = this.state.direction;
    if (dir === "rtl")
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    else document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  };

  render() {
    const { children } = this.props;

    return (
      <ContextLayout.Provider
        value={{
          state: this.state,
          verticalLayout: layouts["verticalLayout"],
          switchLayout: (layout: string) => {
            this.setState({ activeLayout: layout });
          },
          switchDir: (dir: string) => {
            this.setState({ direction: dir });
          },
        }}
      >
        <div> {children}</div>
      </ContextLayout.Provider>
    );
  }
}

export { Layout, ContextLayout };
