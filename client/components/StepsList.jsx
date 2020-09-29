import React from 'react'
import {connect} from 'react-redux'
import { fetchSteps } from '../actions'
import { getSteps } from '../api'
import { getRecipeSteps } from './helpers/helpers'

//fetchSteps and getSteps are not used - remove until you need them

class StepsList extends React.Component {
    
    render() {
        return (
            <div>
                <ul>{getRecipeSteps(this.props.steps, this.props.id).map(step => <li key={step.step_number}>{step.step_number}. {step.step_desc}</li>)}</ul>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
  return {
    steps: globalState.steps
  }
}

export default connect(mapStateToProps)(StepsList)