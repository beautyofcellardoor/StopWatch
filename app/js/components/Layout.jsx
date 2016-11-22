import React, { Component, PropTypes } from 'react';

import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        {/* we brought in the Header & Footer component here */}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
