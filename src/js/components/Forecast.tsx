import * as React from 'react'

export default (props: any) => {
    const day = props && props.match && props.match.params && props.match.params.day ? props.match.params.day : null

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