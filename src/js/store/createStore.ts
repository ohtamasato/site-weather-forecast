import { History } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { connectRouter } from 'connected-react-router'
import rootReducer from 'reducers'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default (history: History): Store => {
    const middlewares = [routerMiddleware(history), thunk]

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger)
    }

    return createStore(
        combineReducers({
            rootReducer,
            router: connectRouter(history)
        }),
        applyMiddleware(...middlewares)
    )
}