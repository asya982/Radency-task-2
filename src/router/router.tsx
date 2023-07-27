import App from "../App";
import { store } from "../redux/store";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [{ path: "active" }, { path: "atchived" }],
  },
]);
