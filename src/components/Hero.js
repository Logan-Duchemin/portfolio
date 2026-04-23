import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
import cv from '../data/CV_Logan_Duchemin.pdf';

function Blob({ top, bottom, left, right, size, color }) {
  return (
    <Box sx={{
      position: 'absolute', top, bottom, left, right,
      width: size, height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      pointerEvents: 'none',
    }} />
  );
}

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
      <Blob top="-10%" right="-5%" size={500} color="rgba(124,77,255,0.15)" />
      <Blob bottom="-10%" left="-5%" size={350} color="rgba(0,188,212,0.08)" />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 2,
            px: 1.5,
            py: 0.5,
            borderRadius: 99,
            border: '1px solid rgba(0,200,100,0.3)',
            bgcolor: 'rgba(0,200,100,0.08)',
          }}
        >
          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#00c864' }} />
          <Typography variant="caption" sx={{ color: '#00c864', fontWeight: 600 }}>
            Disponible — Bachelor 2026
          </Typography>
        </Box>

        <Typography variant="overline" color="primary" fontSize={14} letterSpacing={3} display="block">
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

        <Stack direction="row" flexWrap="wrap" gap={2}>
          <Button variant="contained" size="large" component={Link} to="/projects" endIcon={<ArrowForwardIcon />} sx={{ borderRadius: 99 }}>
            Voir mes projets
          </Button>
          <Button variant="outlined" size="large" component={Link} to="/contact" sx={{ borderRadius: 99 }}>
            Me contacter
          </Button>
          <Button
            variant="text"
            size="large"
            startIcon={<DownloadIcon />}
            href={cv}
            download="CV_Logan_Duchemin.pdf"
            sx={{ borderRadius: 99, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
          >
            Mon CV
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
