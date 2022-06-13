import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Settings from "./pages/Settings/Settings";
import NoPage from "./pages/NoPage/NoPage";
import React from "react";

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path= "/" components={Home} />
        <Route exact path="/about" components={About} />
        <Route exact path="/settings" components={Settings} />
        <Route exact path="*" components={NoPage} />
    </Switch>
    </BrowserRouter>
);

export default Routes;