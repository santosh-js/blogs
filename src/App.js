import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./components/AppRouter";

// Entry point for the app attached redux store
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
