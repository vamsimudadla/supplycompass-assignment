import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import ErrorDetailsPage from "./routes/ErrorDetailsPage";
import ErrorsPage from "./routes/ErrorsPage";
import stores from "./stores";
import {
  ERRORS_PAGE_PATH,
  ERRORS_PAGE,
  ERROR_DETAILS_PAGE_PATH,
  ERROR_DETAILS_PAGE,
} from "./constants/navigationConstants";

function App() {
  return (
    <Provider stores={stores}>
      <div>
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
      </div>
    </Provider>
  );
}

export default App;
