import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Compétences', to: '/skills' },
  { label: 'Projets', to: '/projects' },
  { label: 'Entreprise', to: '/entreprise' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <>
      <AppBar position="fixed" elevation={elevated ? 4 : 0} sx={{ backdropFilter: 'blur(8px)', bgcolor: 'rgba(13,13,13,0.85)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none' }}
          >
            {'<Logan Duchemin />'}
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                end={link.to === '/'}
                color="inherit"
                sx={{
                  fontWeight: 500,
                  '&.active': { color: 'primary.main', fontWeight: 700 },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile burger */}
          <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={() => setDrawerOpen(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220, pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton component={NavLink} to={link.to} end={link.to === '/'} onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
