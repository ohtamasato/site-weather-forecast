import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from "components/Index"
import Weather from "components/Weather"

export default () => {
    return (
        <Router>
            <Route
                exact={true}
                path="/weather"
                component={Index}
            />
            <Route
                exact={true}
                path="/weather/today"
                component={Weather}
            />
        </Router>
    )
}