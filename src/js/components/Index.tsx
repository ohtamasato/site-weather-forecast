import * as React from 'react'
import { store } from 'components/organisms/Router'
import { setGeograph } from "reducers/geographs"
import { push } from 'react-router-redux'

export default () => {
    return <h1 onClick={() => {
        // TODO: it will be replaced with ajax result later
        const geograph = {
            country_name: "Japan",
            city: "Tokyo",
            latitude: 35.69272994995117,
            longitude: 139.72412109375,
        }
        store.dispatch(setGeograph(geograph))
        store.dispatch(push("./forecast/today"))
    }}>It's index</h1>
}