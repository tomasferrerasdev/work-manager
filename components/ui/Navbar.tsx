import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6">WorkManager</Typography>
      </Toolbar>
    </AppBar>
  );
};
