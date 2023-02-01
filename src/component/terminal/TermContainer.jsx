import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getElementByPath } from "../../module/fileOrDir/elementAction";
import { getElementSelector } from "../../module/fileOrDir/elementSelector";
import TermScreen from "./TermScreen";
import TermLine from "./TermLine";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"


const TermContainer = () =>{

    const [state, setState] = useState({historyLine:[]});

    const addToHistoryLine = (line) => {
        let newHistoryLine = [];
        const l = line.split("\n");
        for(let i=0;i<l.length; i++){
            const newLine = {
                id: uuidv4(),
                historyLine: l[i] 
            }
            newHistoryLine = [...newHistoryLine, newLine];
        }
        setState({
            historyLine: [...state.historyLine, ...newHistoryLine]
        })
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getElementByPath("-home-"));
    }, [dispatch])
    
    
    const elements = useSelector(getElementSelector);
    

    return (
        <Box>
            <TermScreen historyLineProps={state.historyLine} />
            <TermLine addToHistoryLineProps={addToHistoryLine} />
        </Box>
    )
}

export default TermContainer;