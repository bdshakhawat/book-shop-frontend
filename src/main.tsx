import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
// import { Provider } from "react-redux";
// import { Store, persistor } from "./Redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={Store}> */}
    {/* <PersistGate persistor={persistor}> */}
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>

    {/* </PersistGate>
    {/* </Provider> */}
  </StrictMode>
);
