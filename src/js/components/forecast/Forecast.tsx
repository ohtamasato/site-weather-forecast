import * as React from 'react'
import { Geograph } from 'models/geograph'
import { RouteComponentProps } from 'react-router'

interface Props {
    routeProps: RouteComponentProps<any>
    geograph: Geograph | null
}

export default (props: Props) => {
    const day = props.routeProps && props.routeProps.match && props.routeProps.match.params && props.routeProps.match.params.day ? props.routeProps.match.params.day : null

    console.log("geo_location: ", props)

    return (
        day === "today" ? (
            <h1>It's today's weather</h1>
        ) : (
            day === "tomorrow" ? (
                <h1>It's tomorrow's weather</h1>
            ) : (
                day === "day-after-tomorrow" ? (
                    <h1>It's day after tomorrow's weather</h1>
                ) : (
                    <h1>It's weather</h1>
                )
            )
        )
    )
}