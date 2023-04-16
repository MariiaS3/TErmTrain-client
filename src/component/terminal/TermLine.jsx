import { Box, Input } from "@mui/material"
import { padding } from "@mui/system";
import { useState } from "react";



const TermLine = (props) =>{
    const [promptInput, setPromptInput] = useState("");
    const [root, setRoot] = useState("#");
    const handleChange = event => {
        setPromptInput(event.target.value);
      };


    return (
        <Box>
            <span id="linecmd"><i>{props.prompt+root}</i></span>
            <Input style={{paddingLeft: "10px"}}
                id="inputcmd"
                type="text" 
                disableUnderline={true}
                placeholder={promptInput}
                autoFocus={true}
                value={promptInput}
                name="prompt"
                onChange={handleChange}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        props.addToHistoryLineProps(props.prompt+root+"  "+ promptInput)
                        props.listenCmd(promptInput, root);
                        setPromptInput("");
                    } 
                }} />
        </Box>
    )

}

export default TermLine;