import { Box } from "@mui/material";
import Header from "./Header";
import PropTypes from "prop-types";
import "./Layout.css";

const propTypes = {
    children: PropTypes.node.isRequired
}

const Layout = ({children}) => {
    return(
        <Box >
            <Box>
                <Header />
            </Box>
            <Box className="child">
                {children}
            </Box>
        </Box>
    )
}

Layout.propTypes = propTypes;
export default Layout;