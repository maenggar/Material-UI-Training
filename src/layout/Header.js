import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography>Banding Rumah</Typography>
          <div>
            <div>
              <SearchIcon />
            </div>
            <div>
              <InputBase />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
