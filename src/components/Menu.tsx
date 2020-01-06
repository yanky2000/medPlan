import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

export function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = path => e => {
    console.log(path);
    history.push(path);
    setAnchorEl(null);
  };
  const links = [
    { label: 'Home', path: '/' },
    { label: 'My Profile', path: '/profile' },
    { label: 'Doctors', path: '/profile' },
    { label: 'Logout', path: '/logout' },
  ];
  const menuItems = links.map(link => (
    <MenuItem key={link.label} onClick={handleClose(link.path)}>
      {link.label}
    </MenuItem>
  ));
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
