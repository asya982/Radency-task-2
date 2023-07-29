import App from "../App";
import { store } from "../redux/store";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ActivePage from "../pages/ActivePage/ActivePage";
import ArchivePage from "../pages/ArchivePage/ArchivePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      { index: true, element: <ActivePage /> },
      { path: "archived", element: <ArchivePage /> },
    ],
  },
]);
