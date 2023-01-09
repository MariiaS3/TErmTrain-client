const INITIAL_ELEMENT_REDUCER_STATE = {
    element: [],
    promise:{
        isPending: false,
        isFullfilled:false,
        isErrorOcurred:false
    }
}


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