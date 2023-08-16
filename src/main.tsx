import "./index.scss";
import "./i18n/index";

import ReactDOM from "react-dom/client";

import App from "./App";
// import * as dotenv from 'dotenv'
// dotenv.config()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);

postMessage({ payload: "removeLoading" }, "*");
