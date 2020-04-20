import Forecast from 'components/forecast/Forecast'
import { Geograph } from 'models/geograph'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { State as RootState } from 'reducers'

interface Props {
    routeProps: RouteComponentProps<any>
    geograph: Geograph | null
}

const mapStateToProps = (state: RootState, routeProps: RouteComponentProps<any>): Props => {
    console.log("mapStateToProps.routeProps: ", routeProps);
    console.log("mapStateToProps.state: ", state);
    return {
        routeProps: routeProps,
        geograph: state.rootReducer.geographs.geograph
    }
}

const enhancer: any = connect(
    mapStateToProps,
    { }
)

export default enhancer(Forecast)
