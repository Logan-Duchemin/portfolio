import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';
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
  { label: 'Secteur', value: 'Fabrication & distribution', icon: <BusinessIcon fontSize="small" /> },
  { label: 'Localisation', value: 'International', icon: <LocationOnIcon fontSize="small" /> },
  { label: 'Taille', value: '1 000+ collaborateurs', icon: <GroupsIcon fontSize="small" /> },
  { label: 'Fondée en', value: '1920', icon: <HistoryIcon fontSize="small" /> },
];

const missions = [
  { icon: <CodeIcon sx={{ fontSize: 20 }} />, title: 'Frontend Web', desc: "Conception d'interfaces modernes et intuitives.", stack: ['React', 'JavaScript', 'HTML/CSS'] },
  { icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />, title: 'Mobile', desc: "Développement d'applications iOS & Android pour les collaborateurs terrain.", stack: ['React Native', 'Swift'] },
  { icon: <StorageIcon sx={{ fontSize: 20 }} />, title: 'Backend', desc: 'Développement de fonctionnalités et gestion des flux de données.', stack: ['Symfony', 'PHP', 'MySQL', 'SQL Server'] },
  { icon: <BuildIcon sx={{ fontSize: 20 }} />, title: 'Maintenance & Évolution', desc: 'Analyse des besoins, nouvelles fonctionnalités et correction de bugs.', stack: [] },
];

const BORDER = '1px solid rgba(255,255,255,0.07)';

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
      <Container maxWidth="md">

        {/* Header */}
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          Mon alternance
        </Typography>
        <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          L'entreprise
        </Typography>

        {/* Photo + texte */}
        <Stack
          ref={ref}
          direction={{ xs: 'column', md: 'row' }}
          spacing={5}
          alignItems={{ xs: 'stretch', md: 'flex-start' }}
          sx={{ mb: 5 }}
        >
          <Box
            component="img"
            src={entreprisePhoto}
            alt="La Brosse et Dupont"
            sx={{
              width: { xs: '100%', md: '45%' },
              flexShrink: 0,
              height: { xs: 220, md: 300 },
              objectFit: 'cover',
              borderRadius: 3,
              display: 'block',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}
          />
          <Box>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              La Brosse et Dupont
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.9 }}>
              Fondée en 1920, La Brosse et Dupont est un groupe industriel international spécialisé dans la fabrication et la distribution de produits d'hygiène et d'entretien. Avec plus d'un siècle d'histoire, le groupe s'est imposé comme un acteur majeur à l'échelle mondiale.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
              Fort de plus de 1 000 collaborateurs, le groupe allie savoir-faire traditionnel et innovation continue. C'est dans cet environnement que j'effectue mon alternance, contribuant à la transformation digitale de l'entreprise.
            </Typography>
          </Box>
        </Stack>

        {/* Infos 4 colonnes */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            border: BORDER,
            borderRadius: 3,
            overflow: 'hidden',
            mb: 8,
          }}
        >
          {infos.map((info, i) => (
            <Stack
              key={info.label}
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                px: 2.5, py: 2,
                borderRight: { xs: i % 2 === 0 ? BORDER : 'none', md: i < 3 ? BORDER : 'none' },
                borderBottom: { xs: i < 2 ? BORDER : 'none', md: 'none' },
              }}
            >
              <Box sx={{ color: 'primary.main', display: 'flex', flexShrink: 0 }}>{info.icon}</Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', textTransform: 'uppercase', letterSpacing: 0.8, lineHeight: 1, mb: 0.4 }}>
                  {info.label}
                </Typography>
                <Typography variant="body2" color="text.primary" fontWeight={500} noWrap>
                  {info.value}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>

        {/* Missions */}
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3} sx={{ mb: 3, display: 'block' }}>
          Mes missions
        </Typography>

        {missions.map((m, i) => (
          <Box
            key={m.title}
            sx={{
              display: 'flex',
              gap: { xs: 2.5, sm: 4 },
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}
          >
            {i < missions.length - 1 && (
              <Box sx={{
                position: 'absolute',
                left: { xs: 19, sm: 21 },
                top: 44, bottom: -8, width: 2,
                background: 'linear-gradient(to bottom, rgba(124,77,255,0.4), rgba(124,77,255,0.05))',
              }} />
            )}
            <Box sx={{ flexShrink: 0, zIndex: 1 }}>
              <Box sx={{
                width: { xs: 40, sm: 44 }, height: { xs: 40, sm: 44 },
                borderRadius: '50%',
                border: '2px solid rgba(124,77,255,0.5)',
                bgcolor: 'background.paper',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'primary.main',
                boxShadow: '0 0 0 4px rgba(124,77,255,0.08)',
              }}>
                {m.icon}
              </Box>
            </Box>
            <Box sx={{ flex: 1, pb: i < missions.length - 1 ? 5 : 0 }}>
              <Typography variant="caption" color="primary" fontWeight={700} letterSpacing={1}>
                {String(i + 1).padStart(2, '0')}
              </Typography>
              <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.3, mb: 0.8 }}>
                {m.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: m.stack.length ? 1.5 : 0 }}>
                {m.desc}
              </Typography>
              {m.stack.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={0.6}>
                  {m.stack.map((s) => (
                    <Chip key={s} label={s} size="small" sx={{ height: 22, fontSize: '0.68rem' }} />
                  ))}
                </Stack>
              )}
            </Box>
          </Box>
        ))}

      </Container>
    </Box>
  );
}
