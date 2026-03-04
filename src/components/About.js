import { Box, Container, Grid, Typography, Avatar, Divider, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import cv from '../data/CV_Logan_Duchemin.pdf';

export default function About() {
  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          Qui suis-je ?
        </Typography>
        <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          À propos de moi
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: 220,
                height: 220,
                fontSize: '5rem',
                bgcolor: 'primary.main',
                boxShadow: '0 0 40px rgba(124,77,255,0.3)',
              }}
            >
              LD
            </Avatar>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9, fontSize: '1.05rem' }}>
              Je suis un apprenti développeur passionné dans la création d'applications web performantes et accessibles. J'aime travailler sur des projets qui ont un impact réel et résoudre des problèmes complexes avec des solutions élégantes.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}>
              Quand je ne code pas, j'explore de nouvelles technologies, je contribue à des projets open-source ou je pratique tout type de sport.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2}>
              {[
                { label: 'Localisation', value: 'Clermont, France' },
                { label: 'Email', value: 'ducheminlogan4@gmail.com' },
                { label: 'Disponibilité', value: 'Ouvert aux opportunités' },
                { label: 'Formation', value: "PROMEO" },
              ].map((info) => (
                <Grid item xs={12} sm={6} key={info.label}>
                  <Typography variant="caption" color="primary" display="block" fontWeight={600} textTransform="uppercase" letterSpacing={1}>
                    {info.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Grid>

        {/* CV affiché */}
        <Box sx={{ mt: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
                Curriculum Vitae
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                Mon CV
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              href={cv}
              download="CV_Logan_Duchemin.pdf"
              sx={{ borderColor: 'primary.main', color: 'primary.main', '&:hover': { bgcolor: 'rgba(124,77,255,0.08)' } }}
            >
              Télécharger
            </Button>
          </Box>
          <Box
            component="iframe"
            src={cv}
            title="CV Logan Duchemin"
            sx={{
              width: '100%',
              height: { xs: 500, md: 800 },
              border: '1px solid rgba(124,77,255,0.25)',
              borderRadius: 3,
              display: 'block',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
