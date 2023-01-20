import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getElementSelector } from "../../module/fileOrDir/elementSelector";
import TermHistory from "./TermHistory";
import TermLine from "./TermLine";



const TermContainer = () =>{


    const elements = useSelector(getElementSelector);

    return (
        <Box>
            <TermHistory elements={elements}/>
            <TermLine />
        </Box>
    )
}

export default TermContainer;