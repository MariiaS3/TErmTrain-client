import { AppBar, Toolbar, Typography } from "@mui/material"



const Header=() =>{
    return (
      <AppBar position="fixed">
      <Toolbar variant="dense"> 
          <Typography variant="h6" color="inherit">
              TermTrain
          </Typography>
      </Toolbar>
  </AppBar>
    )
}

export default Header;