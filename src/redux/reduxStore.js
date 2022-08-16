
import { combineReducers,  createStore} from 'redux'

const defaultState = {
    items: [
        {
            name: "Сделать это",
            description: "В общем надо сделать то и то и то",
            state: '0'
        }
    ],
    current: 0
}

const reducer = (state = defaultState, action) => {

    switch (action.type){
        case "UPDATE_ITEM":
            return {
                ...state,
                items: state.items.map((item, id) => {
                    return id === state.current ? action.payload : item[id]
                })
            }
        default:
            return state
    }
}


export const store = createStore(reducer)