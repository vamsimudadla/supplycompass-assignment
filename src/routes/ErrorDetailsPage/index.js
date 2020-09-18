import React, { Component } from "react";

import LoadingWrapper from "../../HOCS/LoadingWrapper";

import "./styles.css";

class ErrorDetailsPage extends Component {
  render() {
    const { errorsStore } = this.props;
    const { id } = this.props.match.params;
    const errorObject = errorsStore.getErrorDetails(id);
    return (
      <div className={"error-details-container"}>
        {JSON.stringify(errorObject, null, 6)}
      </div>
    );
  }
}

export default LoadingWrapper(ErrorDetailsPage);
