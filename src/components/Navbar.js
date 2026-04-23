import { useState } from 'react';
import {
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink} from 'react-router-dom';

const navBtnSx = {
  fontSize: '0.8rem',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: '100px',
  px: 1.5,
  py: 0.6,
  minWidth: 0,
  color: 'text.secondary',
  transition: 'color 0.2s, background-color 0.2s',
  '&:hover': { color: 'text.primary', bgcolor: 'rgba(255,255,255,0.06)' },
  '&.active': { color: 'primary.main', bgcolor: 'rgba(124,77,255,0.12)', fontWeight: 700 },
};

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Compétences', to: '/skills' },
  { label: 'Entreprise', to: '/entreprise' },
  { label: 'Projets', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1300,
          width: { xs: 'calc(100% - 32px)', sm: 'auto' },
          minWidth: { sm: 560 },
          maxWidth: { sm: 780 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2, sm: 2.5 },
            py: { xs: 1, sm: 0.75 },
            borderRadius: '100px',
            bgcolor: scrolled ? 'rgba(10,10,20,0.88)' : 'rgba(26,26,46,0.65)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 4px 16px rgba(0,0,0,0.2)',
            transition: 'background-color 0.35s, box-shadow 0.35s',
          }}
        >

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.25, ml: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                end={link.to === '/'}
                color="inherit"
                size="small"
                sx={navBtnSx}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile */}
          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' }, p: 0.75, ml: 1 }}
            onClick={() => setDrawerOpen(true)}
            color="inherit"
            size="small"
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { bgcolor: 'background.paper', width: 240 } } }}
      >
        <Box sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, pb: 1 }}>
            <Typography variant="body2" color="text.disabled" fontWeight={600} letterSpacing={1} textTransform="uppercase" fontSize={11}>
              Menu
            </Typography>
            <IconButton size="small" onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    '&.active': { color: 'primary.main', bgcolor: 'rgba(124,77,255,0.1)' },
                  }}
                >
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
