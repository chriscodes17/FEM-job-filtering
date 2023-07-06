import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducers/jobsReducer";
import filterReducer from "./reducers/filterReducer";
import App from "./App.jsx";
import "./index.css";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filter: filterReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
