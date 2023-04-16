import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getElementByPath } from "../../module/fileOrDir/elementAction";
import { getElementSelector } from "../../module/fileOrDir/elementSelector";
import TermScreen from "./TermScreen";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import Commands from "./Commands";


const TermContainer = () =>{
    const [prompt, setPrompt] = useState("[username@localhost]");
    const [historyLine, setHistoryLine] = useState({historyLine:[]});
    const [path, setPath] = useState({path:"/home/", prevPath:"/home/"});

    const addToHistoryLine = (line) => {
        let newHistoryLine = [];
        const l = line.split("\n");
        console.log(path.path);
        for(let i=0;i<l.length; i++){
            const newLine = {
                id: uuidv4(),
                historyLine: l[i],
            }
            newHistoryLine = [...newHistoryLine, newLine];
        }
        setHistoryLine({
            historyLine: [...historyLine.historyLine, ...newHistoryLine]
        })
    }

    const dispatch = useDispatch();

    //when we call store.dispatch(action), the store runs the reducer, 
    //calculates the updated state.()
    //A Redux store runs the root reducer whenever an action is dispatched
    useEffect(() => {
        dispatch(getElementByPath("-"));
    }, [dispatch])
    
    
    const elements = useSelector(getElementSelector);
    

    return (
        <Box className="termcontainer">
            <TermScreen historyLineProps={historyLine.historyLine}/>
            <Commands addToHistoryLineProps={addToHistoryLine} path={path.path} prevPath={path.prevPath} prompt={prompt} style={{margin:"-10px"}}/>
        </Box>
    )
}

export default TermContainer;