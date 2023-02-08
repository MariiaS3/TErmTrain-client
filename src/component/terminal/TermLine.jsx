import { Box, Input } from "@mui/material"
import { useState } from "react";



const TermLine = (props) =>{
    const [promptInput, setPromptInput] = useState("");
    const [prompt, setPrompt] = useState("[username@localhost]");
    const [root, setRoot] = useState("#");
    const handleChange = event => {
        setPromptInput(event.target.value);
      };


    return (
        <Box>
            <span id="linecmd"><i>{prompt+root}</i></span>
            <Input 
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
                        props.addToHistoryLineProps(prompt+root+"  "+ promptInput)
                        setPromptInput("");
                    } 
                }} />
        </Box>
    )

}

export default TermLine;