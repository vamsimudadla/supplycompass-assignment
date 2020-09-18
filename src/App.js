import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import ErrorDetailsPage from "./routes/ErrorDetailsPage";
import ErrorsPage from "./routes/ErrorsPage";
import store from "./store";
import {
  ERRORS_PAGE_PATH,
  ERRORS_PAGE,
  ERROR_DETAILS_PAGE_PATH,
  ERROR_DETAILS_PAGE,
} from "./constants/navigationConstants";
import "./App.css";

function App() {
  return (
    <div className={"app"}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path={ERRORS_PAGE_PATH}
              key={ERRORS_PAGE}
              component={ErrorsPage}
            />
            <Route
              path={ERROR_DETAILS_PAGE_PATH}
              key={ERROR_DETAILS_PAGE}
              component={ErrorDetailsPage}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
