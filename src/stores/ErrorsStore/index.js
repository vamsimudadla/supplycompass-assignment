import { observable } from "mobx";

class ErrorsStore {
  @observable errorsList;

  constructor(props) {
    super(props);
    this.errorsList = [];
  }
}

export default ErrorsStore;
