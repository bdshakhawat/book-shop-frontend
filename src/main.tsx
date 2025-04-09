import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./Routes/Routes";
// import { Provider } from "react-redux";
// import { Store, persistor } from "./Redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import MainLayout from "./components/Layout/MainLayout";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={Store}> */}
      {/* <PersistGate persistor={persistor}> */}
        {/* <RouterProvider router={router} /> */}
        <Toaster />
        <MainLayout></MainLayout>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </StrictMode>
);
