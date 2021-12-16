import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.render(
    <BrowserRouter>
            <StyledEngineProvider injectFirst>
            <App />
            </StyledEngineProvider>
    </BrowserRouter>,
  document.querySelector("#root")
);