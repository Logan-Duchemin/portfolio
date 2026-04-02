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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,77,255,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="overline" color="primary" fontSize={14} letterSpacing={3}>
          Développeur Full-Stack
        </Typography>

        <Typography variant="h1" fontSize={{ xs: '2.5rem', md: '4rem' }} sx={{ mt: 1, mb: 2, lineHeight: 1.1 }}>
          Bonjour, je suis{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #7c4dff 0%, #b47aff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
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
