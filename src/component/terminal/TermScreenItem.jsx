import { Box, Paper, Typography } from "@mui/material"
// import Proptypes from 'prop-types';

// const propTypes = {
//     element: Proptypes.shape({
//         id: Proptypes.number.isRequired,
//         path: Proptypes.string.isRequired,
//         name: Proptypes.string.isRequired,
//         link: Proptypes.number.isRequired,
//         permisions: Proptypes.string.isRequired,
//         username: Proptypes.string.isRequired,
//         groupname: Proptypes.string.isRequired,
//         isDirectory: Proptypes.bool.isRequired,
//         size: Proptypes.number.isRequired,
//         text: Proptypes.string.isRequired,
//         time: Proptypes.string.isRequired,
//     }).isRequired,
// }


const TermScreenItem = (props) => {
    return <Box>
        <i><ul>
            {
                <li style={{listStyle:"none"}}>
                    {props.lineProps.historyLine.includes("#") || props.lineProps.historyLine.includes("$") ?
                        <span style={{ color: "#53D632", fontSize: "25px" }}>
                            {props.lineProps.historyLine.includes("#") ? props.lineProps.historyLine.split("#")[0]+"#" : props.lineProps.historyLine.split("$")[0]+"$"}
                            <span style={{ color: "#D7DEDE" }}>
                                {props.lineProps.historyLine.includes("#") ? props.lineProps.historyLine.split("#")[1] : props.lineProps.historyLine.split("$")[1]}
                            </span>
                        </span> :
                        <span style={{ color: "#D7DEDE", paddingLeft: "10px" }}>
                            {props.lineProps.historyLine}
                        </span>
                    }
                </li>
            }
        </ul></i>
    </Box>
}

// TermScreenItem.propTypes = propTypes;
export default TermScreenItem;