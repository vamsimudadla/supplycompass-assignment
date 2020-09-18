import React, { Component } from "react";

import LoadingWrapper from "../../HOCS/LoadingWrapper";

class ErrorsPage extends Component {
  render() {
    return (
      <div>
        <span>This is errors page</span>
      </div>
    );
  }
}

export default LoadingWrapper(ErrorsPage);
