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
        <Typography>{props.lineProps.historyLine}</Typography>
    </Box>
}

// TermScreenItem.propTypes = propTypes;
export default TermScreenItem;