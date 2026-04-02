import { useState } from 'react';
import { Box, Container, Typography, Avatar, Button, Stack, Tab, Tabs, Chip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ArticleIcon from '@mui/icons-material/Article';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import cv from '../data/CV_Logan_Duchemin.pdf';
import annexe from '../data/Annexe.pdf';

const infos = [
  { label: 'Localisation', value: 'Hondainville (60250)', icon: <LocationOnIcon fontSize="small" /> },
  { label: 'Email', value: 'ducheminlogan4@gmail.com', icon: <EmailIcon fontSize="small" /> },
  { label: 'Téléphone', value: '06 11 57 97 71', icon: <PhoneIcon fontSize="small" /> },
  { label: 'Formation', value: 'BTS SIO option SLAM — PROMEO Compiègne', icon: <SchoolIcon fontSize="small" /> },
  { label: 'Disponibilité', value: 'Télétravail ou présentiel', icon: <WorkOutlineIcon fontSize="small" /> },
  { label: 'Mobilité', value: 'Permis B — Véhicule personnel', icon: <DirectionsCarIcon fontSize="small" /> },
];

const docs = [
  { label: 'Mon CV', src: cv, download: 'CV_Logan_Duchemin.pdf', icon: <ArticleIcon fontSize="small" /> },
  { label: 'Annexe', src: annexe, download: 'Annexe.pdf', icon: <AttachFileIcon fontSize="small" /> },
];

const formations = [
  { period: 'À partir de 2026', title: 'Bachelor Developpeur fullstack', subtitle: 'EPSI Paris', tag: 'À venir' },
  { period: '2024 — Aujourd\'hui', title: 'BTS SIO option SLAM', subtitle: 'PROMEO Compiègne' },
  { period: '2022 — 2024', title: 'Baccalauréat général', subtitle: 'Lycée Cassini, Clermont' },
];

const experiences = [
  { period: '2024 — Aujourd\'hui', title: 'Alternant développeur', subtitle: 'La Brosse et Dupont' },
];

const BORDER = '1px solid rgba(255,255,255,0.07)';

export default function About() {
  const [docTab, setDocTab] = useState(0);

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 14 }, pb: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">

        {/* Hero */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 3, sm: 5 }}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          sx={{ mb: 8 }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Box
              sx={{
                p: '3px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c4dff, #b47aff)',
                display: 'inline-flex',
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 100, sm: 120 },
                  height: { xs: 100, sm: 120 },
                  fontSize: '2.2rem',
                  bgcolor: 'background.paper',
                  boxShadow: '0 0 32px rgba(124,77,255,0.25)',
                }}
              >
                LD
              </Avatar>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, pt: { sm: 0.5 } }}>
            <Typography variant="overline" color="primary" fontSize={12} letterSpacing={3}>
              Qui suis-je ?
            </Typography>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.9rem', md: '2.5rem' }, lineHeight: 1.2 }}>
              À propos de moi
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
              Apprenti développeur passionné par la création d'applications web performantes et accessibles.
              J'aime résoudre des problèmes complexes avec des solutions élégantes, et explorer de nouvelles
              technologies en dehors du code.
            </Typography>
          </Box>
        </Stack>

        {/* Infos */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" color="primary" fontSize={12} letterSpacing={3} sx={{ mb: 2, display: 'block' }}>
            Informations
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              border: BORDER,
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            {infos.map((info, i) => (
              <Stack
                key={info.label}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  px: 2.5,
                  py: 2,
                  borderRight: { xs: 'none', sm: i % 2 === 0 ? BORDER : 'none' },
                  borderBottom: {
                    xs: i < infos.length - 1 ? BORDER : 'none',
                    sm: i < infos.length - 2 ? BORDER : 'none',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', display: 'flex', flexShrink: 0 }}>{info.icon}</Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    variant="caption"
                    color="text.disabled"
                    sx={{ display: 'block', textTransform: 'uppercase', letterSpacing: 0.8, lineHeight: 1, mb: 0.5 }}
                  >
                    {info.label}
                  </Typography>
                  <Typography variant="body2" color="text.primary" fontWeight={500} noWrap>
                    {info.value}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>

        {/* Parcours */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" color="primary" fontSize={12} letterSpacing={3} sx={{ mb: 3, display: 'block' }}>
            Parcours
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 5, sm: 6 } }}>

            {/* Formations */}
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <SchoolIcon sx={{ color: 'primary.main', fontSize: 17 }} />
                <Typography variant="caption" color="primary" fontWeight={700} textTransform="uppercase" letterSpacing={1.2}>
                  Formation
                </Typography>
              </Stack>

              {formations.map((f, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 2, position: 'relative' }}>
                  {i < formations.length - 1 && (
                    <Box sx={{
                      position: 'absolute', left: 7, top: 18, bottom: -4, width: 2,
                      background: 'linear-gradient(to bottom, rgba(124,77,255,0.35), rgba(124,77,255,0.05))',
                    }} />
                  )}
                  <Box sx={{ flexShrink: 0, zIndex: 1, mt: '5px' }}>
                    <Box sx={{
                      width: 16, height: 16, borderRadius: '50%',
                      bgcolor: f.tag ? 'transparent' : 'primary.main',
                      border: f.tag ? '2px dashed rgba(124,77,255,0.5)' : '3px solid rgba(26,26,46,1)',
                      boxShadow: f.tag ? 'none' : '0 0 0 2px rgba(124,77,255,0.35)',
                    }} />
                  </Box>
                  <Box sx={{ pb: i < formations.length - 1 ? 3.5 : 0 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.3 }}>
                      <Typography variant="caption" color="primary" fontWeight={600}>{f.period}</Typography>
                      {f.tag && (
                        <Chip label={f.tag} size="small" sx={{ height: 17, fontSize: '0.6rem', px: 0.2 }} />
                      )}
                    </Stack>
                    <Typography variant="body2" fontWeight={700} color={f.tag ? 'text.secondary' : 'text.primary'}>
                      {f.title}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">{f.subtitle}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Expériences */}
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <WorkOutlineIcon sx={{ color: 'primary.main', fontSize: 17 }} />
                <Typography variant="caption" color="primary" fontWeight={700} textTransform="uppercase" letterSpacing={1.2}>
                  Expérience
                </Typography>
              </Stack>

              {experiences.map((e, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 2, position: 'relative' }}>
                  {i < experiences.length - 1 && (
                    <Box sx={{
                      position: 'absolute', left: 7, top: 18, bottom: -4, width: 2,
                      background: 'linear-gradient(to bottom, rgba(124,77,255,0.35), rgba(124,77,255,0.05))',
                    }} />
                  )}
                  <Box sx={{ flexShrink: 0, zIndex: 1, mt: '5px' }}>
                    <Box sx={{
                      width: 16, height: 16, borderRadius: '50%',
                      bgcolor: 'primary.main',
                      border: '3px solid rgba(26,26,46,1)',
                      boxShadow: '0 0 0 2px rgba(124,77,255,0.35)',
                    }} />
                  </Box>
                  <Box sx={{ pb: i < experiences.length - 1 ? 3.5 : 0 }}>
                    <Typography variant="caption" color="primary" fontWeight={600} sx={{ display: 'block', mb: 0.3 }}>
                      {e.period}
                    </Typography>
                    <Typography variant="body2" fontWeight={700} color="text.primary">{e.title}</Typography>
                    <Typography variant="caption" color="text.disabled">{e.subtitle}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

          </Box>
        </Box>

        {/* Documents */}
        <Box>
          <Typography variant="overline" color="primary" fontSize={12} letterSpacing={3} sx={{ mb: 2, display: 'block' }}>
            Documents
          </Typography>
          <Box sx={{ border: BORDER, borderRadius: 3, overflow: 'hidden' }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 2, borderBottom: BORDER, bgcolor: 'rgba(255,255,255,0.02)' }}
            >
              <Tabs
                value={docTab}
                onChange={(_, v) => setDocTab(v)}
                sx={{
                  '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, minHeight: 52, gap: 0.8, fontSize: '0.9rem' },
                  '& .Mui-selected': { color: 'primary.main' },
                  '& .MuiTabs-indicator': { backgroundColor: 'primary.main' },
                }}
              >
                {docs.map((d, i) => (
                  <Tab key={i} label={d.label} icon={d.icon} iconPosition="start" />
                ))}
              </Tabs>
              <Button
                size="small"
                variant="outlined"
                startIcon={<DownloadIcon fontSize="small" />}
                href={docs[docTab].src}
                download={docs[docTab].download}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  borderColor: 'rgba(124,77,255,0.4)',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(124,77,255,0.08)', borderColor: 'primary.main' },
                }}
              >
                Télécharger
              </Button>
            </Stack>

            <Box
              component="iframe"
              src={docs[docTab].src}
              title={docs[docTab].label}
              sx={{ width: '100%', height: { xs: 520, md: 800 }, border: 'none', display: 'block' }}
            />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
