import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const config = {
  professional: {
    label: 'Projets professionnels',
    subtitle: 'En entreprise',
  },
  personal: {
    label: 'Projets personnels',
    subtitle: 'Projets perso',
  },
};

export default function ProjectList({ type }) {
  const list = projects.filter((p) => p.type === type);
  const { label, subtitle } = config[type];

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: 'text.secondary',
              borderColor: 'divider',
              '&:hover': {
                borderColor: 'text.secondary',
                bgcolor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Retour aux projets
          </Button>
        </Box>

        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          {subtitle}
        </Typography>
        <Typography variant="h2" sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          {label}
        </Typography>

        <Grid container spacing={4}>
          {list.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  },
                }}
              >
                <Box sx={{ height: 8, bgcolor: project.color, borderRadius: '12px 12px 0 0' }} />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {project.shortDesc}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.stack.map((tech) => (
                      <Chip key={tech} label={tech} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.06)', fontSize: '0.7rem' }} />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<InfoOutlinedIcon />}
                    component={Link}
                    to={`/projects/${project.id}`}
                    sx={{
                      borderColor: 'rgba(124,77,255,0.4)',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(124,77,255,0.08)',
                      },
                    }}
                  >
                    Détail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
