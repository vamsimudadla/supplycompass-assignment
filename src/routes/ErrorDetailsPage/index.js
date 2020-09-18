import React, { Component } from "react";

import LoadingWrapper from "../../HOCS/LoadingWrapper";

class ErrorDetailsPage extends Component {
  render() {
    return (
      <div>
        <span>This is error details page</span>
      </div>
    );
  }
}

export default LoadingWrapper(ErrorDetailsPage);
