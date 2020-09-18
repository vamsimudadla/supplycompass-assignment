import { observable, action } from "mobx";

import { apiStatus } from "../../constants/apiConstants";

class ErrorsStore {
  @observable errorsList;
  @observable getErrorsListAPIStaus;

  constructor() {
    this.errorsList = [];
    this.getErrorsListAPIStaus = apiStatus.apiInitial;
  }

  @action.bound
  setGetErrorsListAPIStatus(apiStatus) {
    this.setGetErrorsListAPIStatus = apiStatus;
  }

  @action.bound
  setGetErrorsListAPIResponse(response) {
    this.errorsList = response;
  }

  @action.bound
  getErrorsList() {
    const { apiLoading, apiSuccess, apiFailed } = apiStatus;
    this.setGetErrorsListAPIStatus(apiLoading);
    fetch("https://api-flash.supplycompass.com/ukyzGAndExrbNdU/json")
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setGetErrorsListAPIResponse(responseJSON);
        this.setGetErrorsListAPIStatus(apiSuccess);
      })
      .catch((error) => {
        this.setGetErrorsListAPIStatus(apiFailed);
      });
  }
}

export default ErrorsStore;
