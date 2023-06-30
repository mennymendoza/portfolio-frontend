import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

export interface DrawerLink {
    icon: JSX.Element,
    text: string,
    url: string
}

export interface TemporaryDrawerProps {
    links: DrawerLink[]
}

export default function TemporaryDrawer(props: TemporaryDrawerProps) {

    const { links } = props

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <div>
            <Button sx={{margin: 0, padding: 0}} onClick={() => setDrawerOpen(true)}><MenuIcon sx={{color: 'white', fontSize: 35}}/></Button>
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box
                    sx={{ width: 400 }}
                    role="presentation"
                    onKeyDown={() => setDrawerOpen(false)}
                >
                    <h1>Menu</h1>
                    <List>
                        {links.map((obj) => (
                            <a key={obj.text} href={obj.url} style={{textDecoration: "none"}}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {obj.icon}
                                        </ListItemIcon>
                                        <p className='menu-link'>{obj.text}</p>
                                    </ListItemButton>
                                </ListItem>
                            </a>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}