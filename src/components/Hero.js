import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="overline" color="primary" fontSize={14} letterSpacing={3}>
          Développeur Full-Stack
        </Typography>

        <Typography variant="h1" fontSize={{ xs: '2.5rem', md: '4rem' }} sx={{ mt: 1, mb: 2, lineHeight: 1.1 }}>
          Bonjour, je suis{' '}
          <Box component="span" color="primary.main">
            Logan Duchemin
          </Box>
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: 600, fontWeight: 400 }}>
          Je conçois et développe des applications web modernes, de l'idée au déploiement.
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Button variant="contained" size="large" component={Link} to="/projects" endIcon={<ArrowForwardIcon />} sx={{ borderRadius: 99 }}>
            Voir mes projets
          </Button>
          <Button variant="outlined" size="large" component={Link} to="/contact" sx={{ borderRadius: 99 }}>
            Me contacter
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
