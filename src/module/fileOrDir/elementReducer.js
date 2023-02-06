const INITIAL_ELEMENT_REDUCER_STATE = {
    element: [],
    promise:{
        isPending: false,
        isFullfilled:false,
        isErrorOcurred:false
    }
}
//Reducers are functions that calculate a new state value based on previous state + an action
//reduser  receives two arguments( state, action)
//provisde state as a default value
//action describing what happened. action object alvays ave a type field(unique name)
//An action object can have other fields with additional information about what happened. 
//By convention, we put that information in a field called payload.
//update the state immutably by copying the existing state and updating the copy, instead of modifying the original object directly
const elementReducer = (state=INITIAL_ELEMENT_REDUCER_STATE, action) =>{
    switch(action.type){
        case 'ELEMENTPENDING':{
            return{
                ...state,
                promise: {
                    isPending: true,
                    isFullfilled:false,
                    isErrorOcurred:false
                }
            }
        }
        case 'ELEMENTFULLFILLED':{
            return{
                ...state,
                promise: {
                    isPending: false,
                    isFullfilled:true,
                    isErrorOcurred:false
                }
            }
        }
        case 'ELEMENTLISTERROR':{
            return{
                ...state,
                promise: {
                    isPending: false,
                    isFullfilled:false,
                    isErrorOcurred:true
                }
            }
        }
        case 'ELEMENTLISTNAME':{
            return{
                ...state,
                element: action.payload
            }
        }
        case 'ELEMENTLISTPATH':{
            return{
                ...state,
                element: action.payload
            }
        }
        case 'ELEMENTLISTPATHNAME':{
            return{
                ...state,
                element: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default elementReducer;