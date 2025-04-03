import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "antd/dist/reset.css";
import "@/assets/Fonts/font.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loading from "@/pages/components/Loading.tsx";

const basename = import.meta.env.BASE_URL || "/Metanebula";  

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
if (import.meta.hot) {
  import.meta.hot.accept();
}
