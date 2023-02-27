import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import WithErrorHandler from "hoc/withErrorHandler/withErrorHandler";
import ErrorBoundary from "shared/components/errorBoundary/errorBoundary";

import store from "./store/store";
import App from "./App";

const Root = (props) => (
    <Provider store={store}>
        <WithErrorHandler />
        <ErrorBoundary>
            <div className="app-main">
                <BrowserRouter>
                    <App {...props} />
                </BrowserRouter>
            </div>
        </ErrorBoundary>
    </Provider>
);

export default Root;
