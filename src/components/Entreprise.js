import { useEffect, useState, useRef } from 'react';
import { Box, Container, Grid, Typography, Chip, Paper, Stack, Divider } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import entreprisePhoto from '../data/téléchargement.jpeg';

const infos = [
  { label: 'Secteur', value: 'Fabrication & distribution' },
  { label: 'Localisation', value: 'International' },
  { label: 'Taille', value: '1 000+ collaborateurs' },
  { label: 'Fondée en', value: '1920' },
];

const activites = [
  'Hygiène & entretien',
  'Fabrication industrielle',
  'Distribution internationale',
  'Innovation produit',
];

const stats = [
  { icon: <GroupsIcon sx={{ fontSize: 32 }} />, value: '1 000+', label: 'Collaborateurs' },
  { icon: <HistoryIcon sx={{ fontSize: 32 }} />, value: '100+', label: "Ans d'histoire" },
  { icon: <LocationOnIcon sx={{ fontSize: 32 }} />, value: 'Mondial', label: 'Présence mondiale' },
  { icon: <BusinessIcon sx={{ fontSize: 32 }} />, value: '1920', label: 'Fondée en' },
];

export default function Entreprise() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          Mon alternance
        </Typography>
        <Typography variant="h2" sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          L'entreprise
        </Typography>

        {/* Main layout */}
        <Grid container spacing={6} alignItems="flex-start" ref={ref}>

          {/* Image avec bordure dégradée */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', p: '2px', borderRadius: '18px', background: 'linear-gradient(135deg, #7c4dff, #b47aff)' }}>
              <Box
                component="img"
                src={entreprisePhoto}
                alt="La Brosse et Dupont"
                sx={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  filter: 'brightness(0.9)',
                }}
              />
              {/* Badge flottant */}
              <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                px: 2,
                py: 0.8,
                bgcolor: 'rgba(13,13,13,0.85)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(124,77,255,0.4)',
              }}>
                <Typography variant="caption" color="primary" fontWeight={700} letterSpacing={1.5} textTransform="uppercase">
                  Depuis 1920
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Texte & infos */}
          <Grid item xs={12} md={7} sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}>
            <Typography variant="h4" sx={{ mb: 2.5, fontWeight: 700 }}>
              La Brosse et Dupont
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.9, fontSize: '1.05rem' }}>
              Fondée en 1920, La Brosse et Dupont est un groupe industriel international spécialisé dans la fabrication et la distribution de produits d'hygiène et d'entretien. Avec plus d'un siècle d'histoire, le groupe s'est imposé comme un acteur majeur sur ses marchés à l'échelle mondiale.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontSize: '1.05rem', mb: 2 }}>
              Fort de plus de 1 000 collaborateurs à travers le monde, le groupe allie savoir-faire traditionnel et innovation continue. C'est dans cet environnement stimulant que j'effectue mon alternance depuis février 2022, contribuant à la transformation digitale de l'entreprise.
            </Typography>

            {/* Info cards */}
            <Grid container spacing={1.5} sx={{ mb: 3.5 }}>
              {infos.map((info) => (
                <Grid item xs={6} key={info.label}>
                  <Box sx={{
                    p: 1.8,
                    borderRadius: 2,
                    border: '1px solid rgba(124,77,255,0.2)',
                    bgcolor: 'rgba(124,77,255,0.06)',
                    transition: 'border-color 0.25s',
                    '&:hover': { borderColor: 'rgba(124,77,255,0.5)' },
                  }}>
                    <Typography variant="caption" color="primary" display="block" fontWeight={700} textTransform="uppercase" letterSpacing={1} sx={{ mb: 0.4 }}>
                      {info.label}
                    </Typography>
                    <Typography variant="body2" fontWeight={500} color="text.primary">
                      {info.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Missions */}
            <Typography variant="caption" color="primary" display="block" fontWeight={700} textTransform="uppercase" letterSpacing={1} sx={{ mb: 2 }}>
              Mes missions
            </Typography>
            <Grid container spacing={1.5} sx={{ mb: 3 }}>
              {[
                { icon: <CodeIcon sx={{ fontSize: 20 }} />, title: 'Frontend Web', desc: "Conception d'interfaces modernes et intuitives", stack: ['React', 'JavaScript', 'HTML/CSS'] },
                { icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />, title: 'Mobile', desc: 'Applications iOS & Android pour les collaborateurs terrain', stack: ['React Native', 'Swift'] },
                { icon: <StorageIcon sx={{ fontSize: 20 }} />, title: 'Backend', desc: 'Développement de fonctionnalités et gestion des flux de données', stack: ['Symfony', 'PHP', 'MySQL', 'SQL Server'] },
                { icon: <BuildIcon sx={{ fontSize: 20 }} />, title: 'Maintenance & Évolution', desc: 'Analyse des besoins, nouvelles fonctionnalités et correction de bugs', stack: [] },
              ].map((m) => (
                <Grid item xs={12} sm={6} key={m.title}>
                  <Box sx={{
                    p: 2,
                    borderRadius: 2,
                    border: '1px solid rgba(124,77,255,0.2)',
                    bgcolor: 'rgba(124,77,255,0.04)',
                    height: '100%',
                    transition: 'border-color 0.25s, background-color 0.25s',
                    '&:hover': { borderColor: 'rgba(124,77,255,0.5)', bgcolor: 'rgba(124,77,255,0.09)' },
                  }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.8 }}>
                      <Box sx={{ color: 'primary.main', display: 'flex' }}>{m.icon}</Box>
                      <Typography variant="body2" fontWeight={700} color="text.primary">{m.title}</Typography>
                    </Stack>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: m.stack.length ? 1 : 0, lineHeight: 1.6 }}>{m.desc}</Typography>
                    {m.stack.length > 0 && (
                      <Stack direction="row" flexWrap="wrap" gap={0.5}>
                        {m.stack.map((s) => (
                          <Chip key={s} label={s} size="small" sx={{ height: 20, fontSize: '0.65rem', bgcolor: 'rgba(124,77,255,0.12)', color: '#b47aff', border: '1px solid rgba(124,77,255,0.25)' }} />
                        ))}
                      </Stack>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Activités */}
            <Typography variant="caption" color="primary" display="block" fontWeight={700} textTransform="uppercase" letterSpacing={1} sx={{ mb: 1.5 }}>
              Domaines d'activité
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {activites.map((a) => (
                <Chip
                  key={a}
                  label={a}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(124,77,255,0.1)',
                    color: '#b47aff',
                    border: '1px solid rgba(124,77,255,0.3)',
                    fontWeight: 500,
                    transition: 'background-color 0.2s',
                    '&:hover': { bgcolor: 'rgba(124,77,255,0.22)' },
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Séparateur */}
        <Box sx={{ my: 8, height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,77,255,0.3), transparent)' }} />

        {/* Stat cards */}
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3} display="block" textAlign="center" sx={{ mb: 4 }}>
          En chiffres
        </Typography>
        <Grid container spacing={2.5} justifyContent="center">
          {stats.map((item, i) => (
            <Grid item xs={6} sm={3} key={item.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 3,
                  border: '1px solid rgba(124,77,255,0.18)',
                  bgcolor: 'rgba(124,77,255,0.05)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.25s`,
                  '&:hover': {
                    borderColor: 'rgba(124,77,255,0.5)',
                    bgcolor: 'rgba(124,77,255,0.1)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 1.5 }}>{item.icon}</Box>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    background: 'linear-gradient(135deg, #7c4dff, #b47aff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 0.5,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
