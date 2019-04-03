//React
import React from "react";
import ReactDOM from "react-dom";
//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
//Components
import App from "./App";

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
