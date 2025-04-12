import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store, persistor } from "./Redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { Toaster } from "sonner";
// import router from "./Routes/Routes";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<Provider store={store}>*/}
    {/*<PersistGate persistor={persistor}>*/}
    {/*<RouterProvider router={router} />*/}
    {/*<Toaster />*/}
    {/*</PersistGate>*/}
    {/*</Provider>*/}
  </StrictMode>
);
