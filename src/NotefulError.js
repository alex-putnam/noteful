import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NotefulError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Oops...Something went wrong. Please try again later.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

NotefulError.propTypes = {
  children: PropTypes.array,
};
