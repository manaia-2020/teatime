import {CHANGE_PAGE} from '../actions'

function currentPage (state='recipes', action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page
        default:
            return state
    }
}

export default currentPage