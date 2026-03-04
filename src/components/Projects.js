import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = [
  {
    type: 'professional',
    label: 'Projets professionnels',
    subtitle: 'En entreprise',
    description: 'Projets réalisés dans un cadre professionnel ou en alternance.',
    icon: WorkOutlineIcon,
    color: '#7c4dff',
    path: '/projects/professional',
  },
  {
    type: 'personal',
    label: 'Projets personnels',
    subtitle: 'Projets perso',
    description: 'Projets réalisés par passion, curiosité ou apprentissage.',
    icon: PersonOutlineIcon,
    color: '#00bcd4',
    path: '/projects/personal',
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          Ce que j'ai réalisé
        </Typography>
        <Typography variant="h2" sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          Projets
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = projects.filter((p) => p.type === cat.type).length;
            return (
              <Grid item xs={12} sm={6} md={5} key={cat.type}>
                <Card
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 16px 48px rgba(0,0,0,0.4)`,
                    },
                  }}
                >
                  <Box sx={{ height: 6, bgcolor: cat.color, borderRadius: '12px 12px 0 0' }} />
                  <CardActionArea onClick={() => navigate(cat.path)} sx={{ p: 4 }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            bgcolor: `${cat.color}22`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon sx={{ fontSize: 30, color: cat.color }} />
                        </Box>
                        <Box>
                          <Typography variant="overline" sx={{ color: cat.color, fontSize: 11, letterSpacing: 2 }}>
                            {cat.subtitle}
                          </Typography>
                          <Typography variant="h5" fontWeight={700}>
                            {cat.label}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                        {cat.description}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                        {count} projet{count > 1 ? 's' : ''}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
