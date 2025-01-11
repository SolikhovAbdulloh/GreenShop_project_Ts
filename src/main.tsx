import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./root";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const store2 = createStore({
  authName: "register_auth_token",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});
const queryClinet = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClinet}>
    <AuthProvider store={store2}>
      <Provider store={store}>
        <RouterProvider router={root} />
      </Provider>
    </AuthProvider>
  </QueryClientProvider>
);
