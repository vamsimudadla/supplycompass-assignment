import React, { Component } from "react";

import LoadingWrapper from "../../HOCS/LoadingWrapper";
import { navigateToErrorDetailsPage } from "../../utils/NavigationUtils";

import "./styles.css";

class ErrorsPage extends Component {
  onClickListItem = (id) => {
    const { history } = this.props;
    navigateToErrorDetailsPage(history, id);
  };

  renderErrorsList = () => {
    const { errorsStore } = this.props;
    const { errorsList } = errorsStore;
    return errorsList.map((errorItem) => {
      const { id, title, code, environment, api_url: apiURL } = errorItem;
      return (
        <div
          key={id}
          className={"list-item"}
          onClick={() => {
            this.onClickListItem(id);
          }}
        >
          <div className={"wrapper"}>
            <span>{`Error: ${code}`}</span>
            <span>{`Title: ${title}`}</span>
            <span>{`Environment: ${environment}`}</span>
          </div>
          <div className={"api-url-wrapper"}>
            <span>{`API-URL: ${apiURL}`}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className={"list-container"}>{this.renderErrorsList()}</div>;
  }
}

export default LoadingWrapper(ErrorsPage);
