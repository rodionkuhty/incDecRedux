import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";
import Todo from "./todoComp";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
