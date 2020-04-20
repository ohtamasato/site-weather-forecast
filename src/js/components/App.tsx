import * as React from 'react'
import { Route, Switch } from 'react-router'
import Index from "components/Index"
import Forecast from "components/forecast"
import Dependencies from "components/Dependencies"

export default () => {
    return (
        <Switch>
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
        </Switch>
    )
}