import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { apiStatus } from "../../constants/apiConstants";
import Loader from "../../components/Loader";

function LoadingWrapper(WrappedComponent) {
  @inject("errorsStore")
  @observer
  class LoadingWrapper extends Component {
    componentDidMount() {
      const { errorsStore } = this.props;
      if (errorsStore.getErrorsListAPIStaus === apiStatus.apiInitial) {
        errorsStore.getErrorsList();
      }
    }

    render() {
      const { apiLoading, apiSuccess, apiFailed } = apiStatus;
      const { errorsStore } = this.props;
      switch (errorsStore.getErrorsListAPIStaus) {
        case apiLoading:
          return <Loader />;
        case apiSuccess:
          return <WrappedComponent errorsStore={errorsStore} {...this.props} />;
        case apiFailed:
          return "Please try again...";
        default:
          return null;
      }
    }
  }

  return LoadingWrapper;
}

export default LoadingWrapper;
