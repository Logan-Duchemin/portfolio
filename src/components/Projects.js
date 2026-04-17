import { useState } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Chip, Stack, Tabs, Tab, Modal, IconButton, Button, Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '../data/projects';

export default function Projects() {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(null);

  const filtered = tab === 0
    ? projects
    : projects.filter((p) => p.type === (tab === 1 ? 'professional' : 'personal'));

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          Ce que j'ai réalisé
        </Typography>
        <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          Projets
        </Typography>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{ mb: 6, borderBottom: '1px solid', borderColor: 'divider' }}
        >
          <Tab label="Tous" />
          <Tab label="Professionnels" />
          <Tab label="Personnels" />
        </Tabs>

        <Grid container spacing={4}>
          {filtered.map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.id}>
              <Card
                onClick={() => setSelected(project)}
                sx={{
                  height: 200,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px rgba(0,0,0,0.4)`,
                    borderColor: project.color,
                  },
                }}
              >
                <Box sx={{ height: 6, flexShrink: 0, bgcolor: project.color, borderRadius: '12px 12px 0 0' }} />
                <CardContent sx={{ flexGrow: 1, p: 3, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.7, flexGrow: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                  >
                    {project.shortDesc}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.75}>
                    {project.stack.slice(0, 4).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ bgcolor: 'rgba(255,255,255,0.06)', fontSize: '0.7rem' }}
                      />
                    ))}
                    {project.stack.length > 4 && (
                      <Chip
                        label={`+${project.stack.length - 4}`}
                        size="small"
                        sx={{ bgcolor: 'rgba(255,255,255,0.06)', fontSize: '0.7rem' }}
                      />
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 600 },
            maxHeight: '85vh',
            overflowY: 'auto',
            bgcolor: 'background.default',
            borderRadius: 3,
            p: 4,
            outline: 'none',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {selected && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ height: 4, width: 48, bgcolor: selected.color, borderRadius: 99, mt: 1 }} />
                <IconButton onClick={() => setSelected(null)} size="small">
                  <CloseIcon />
                </IconButton>
              </Box>

              <Typography variant="h4" fontWeight={700} sx={{ mb: 0.5 }}>
                {selected.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {selected.shortDesc}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 4 }}>
                {selected.fullDesc}
              </Typography>

              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
                Stack technique
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
                {selected.stack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    sx={{ borderColor: selected.color, color: 'text.primary' }}
                  />
                ))}
              </Stack>

              <Divider sx={{ mb: 3 }} />

              <Stack direction="row" spacing={2}>
                {selected.github && selected.github !== '#' && (
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le code
                  </Button>
                )}
                {selected.demo && selected.demo !== '#' && (
                  <Button
                    variant="outlined"
                    startIcon={<LaunchIcon />}
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderColor: selected.color, color: selected.color }}
                  >
                    Voir le site
                  </Button>
                )}
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
