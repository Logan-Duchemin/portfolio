import { Box, Container, Typography, Chip, Button, Stack, Divider } from '@mui/material';
import { useParams, Navigate, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="md">

        {/* Back button */}
        <Button
          component={Link}
          to="/projects"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4, color: 'text.secondary' }}
        >
          Retour aux projets
        </Button>

        {/* Color accent bar */}
        <Box
          sx={{
            height: 6,
            width: 64,
            bgcolor: project.color,
            borderRadius: 99,
            mb: 3,
          }}
        />

        <Typography variant="h3" fontWeight={700} sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
          {project.title}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Description
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, mb: 4 }}>
          {project.fullDesc}
        </Typography>

        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Stack technique
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 5 }}>
          {project.stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
              sx={{ borderColor: project.color, color: 'text.primary' }}
            />
          ))}
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le code
          </Button>
          <Button
            variant="outlined"
            startIcon={<OpenInNewIcon />}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderColor: project.color, color: project.color }}
          >
            Voir la démo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
