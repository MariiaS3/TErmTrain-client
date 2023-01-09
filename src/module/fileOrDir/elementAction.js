import { getElementByNameService, getElementByPathService, getElementnByNameAndPathService } from "./fileService";


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
}

export const getElementByPath = (path) = async (dispatch) =>{
    try{
        dispatch({type: 'ELEMENTPENDING'});
        const elements = await getElementByPathService(path);
        dispatch({
            type: 'ELEMENTLISTPATH',
            payload: elements.data
        })
    }catch(error){
        dispatch({ type: 'ELEMENTLISTERROR' });
    }
}

export const getElementByNameAndPath = (pathName) = async (dispatch) =>{
    try{
        dispatch({type: 'ELEMENTPENDING'});
        const elements = await getElementnByNameAndPathService(pathName);
        dispatch({
            type: 'ELEMENTLISTPATHNAME',
            payload: elements.data
        })
    }catch(error){
        dispatch({ type: 'ELEMENTLISTERROR' });
    }
}