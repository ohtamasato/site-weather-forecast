import * as React from "react"
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import createStore from 'store/createStore'
import App from "components/App"
import { ConnectedRouter } from 'connected-react-router'

export const history = createBrowserHistory()
export const store = createStore(history)

export default () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    )
}
