import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from "components/Index"
import Forecast from "components/Forecast"
import Dependencies from "components/Dependencies"

export default () => {
    return (
        <Router>
            <Route
                exact={true}
                path="/weather"
                component={Index}
            />
            <Route
                path="/weather/forecast/:day"
                component={Forecast}
            />
            <Route
                exact={true}
                path="/weather/dependencies"
                component={Dependencies}
            />
        </Router>
    )
}