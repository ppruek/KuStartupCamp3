import React from "react";
import { Router, Route } from "react-router";
import Homepage from "../components/Home";

const Routes = props => (
    <Router {...props}>
        <Route path="/" component={Homepage} />
    </Router>
);

export default Routes;
