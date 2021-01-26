const InitialState  = {
    arr:[]
}


function reduxstate(state = InitialState, action) {
    switch (action.type) {
        case 'ACTION':
            return {
                ...state,
                arr:[...state.arr,action.payload]
            }
        default:  
            return state
    }
  }
export default reduxstate