import { Box } from "@mui/material";
// import Proptypes from 'prop-types';
import TermScreenItem from "./TermScreenItem";


// const propTypes = {
//     elements: Proptypes.arrayOf(Proptypes.shape({
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
//     })).isRequired,
// }

const TermScreen = (props) => {

    return (
        <div>
            <ul>
                {props.historyLineProps.map((line) =>
                    <TermScreenItem lineProps={line} key={line.id} />)}
            </ul>
        </div>
    )
}

// TermScreen.propTypes = propTypes;
export default TermScreen;


