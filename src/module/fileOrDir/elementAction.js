
import { getElementByNameService, getElementByPathService, getElementnByNameAndPathService } from "./elementService";

//when we call store.dispatch(action), the store runs the reducer, 
//calculates the updated state.
//The only way to update the state is to call store.dispatch() and pass in an action object. 
//The store will run its reducer function and save the new state value inside, and we can call getState()
// to retrieve the updated value
export const getElementByName = (name) => async (dispatch) => {
    try{
        dispatch({type: 'ELEMENTPENDING'});
        const elements = await getElementByNameService(name);
        dispatch({
            type: 'ELEMENTLISTNAME',
            payload: elements.data
        })
        dispatch({type: 'ELEMENTFULLFILLED'});
    }
    catch(error){
        dispatch({ type: 'ELEMENTLISTERROR' });
    }
};

export const getElementByPath = (path) => async (dispatch) => {
    try{
        dispatch({type: 'ELEMENTPENDING'});
        const elements = await getElementByPathService(path);
        dispatch({
            type: 'ELEMENTLISTPATH',
            payload: elements.data
        })
        dispatch({type: 'ELEMENTFULLFILLED'});
    }
    catch(error){
        dispatch({ type: 'ELEMENTLISTERROR' });
    }
};

export const getElementByNameAndPath = (pathName) => async (dispatch) =>{
    try{
        dispatch({type: 'ELEMENTPENDING'});
        const elements = await getElementnByNameAndPathService(pathName);
        dispatch({
            type: 'ELEMENTLISTPATHNAME',
            payload: elements.data
        })
        dispatch({type: 'ELEMENTFULLFILLED'});
    }catch(error){
        dispatch({ type: 'ELEMENTLISTERROR' });
    }
};