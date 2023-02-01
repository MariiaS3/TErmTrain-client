import { Box, Input } from "@mui/material"
import { useState } from "react";



const TermLine = (props) =>{
    const [prompt, setPrompt] = useState("");

    const handleChange = event => {
        setPrompt(event.target.value);
      };


    return (
        <Box>
            <i>[username@localhost]#</i> 
            <Input type="text" 
                disableUnderline={true}
                placeholder={prompt}
                autoFocus={true}
                value={prompt}
                name="prompt"
                onChange={handleChange}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        props.addToHistoryLineProps(prompt)
                        setPrompt("");
                    } 
                }} />
        </Box>
    )

}

export default TermLine;