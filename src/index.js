import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Axios from "axios";

require('dotenv').config();
Axios.defaults.baseURL = process.env.REACT_APP_API_URL;
ReactDOM.render(<App />, document.getElementById("root"));
