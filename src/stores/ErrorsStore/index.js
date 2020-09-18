import { observable } from "mobx";

class ErrorsStore {
  @observable errorsList;

  constructor() {
    this.errorsList = [];
  }
}

export default ErrorsStore;
