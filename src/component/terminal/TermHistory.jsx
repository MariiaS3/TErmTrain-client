import { Box } from "@mui/material";
import TermHistoryItem from "./TermHistoryItem";


const TermHistory = ({elements}) =>{


    return (
        <Box>
            {elements.map((element) => 
                <TermHistoryItem element={element} key={element.id} />)}
        </Box>
    )
}


export default TermHistory;


