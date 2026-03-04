import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, LinearProgress, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

const categories = [
  {
    label: 'Frontend Web',
    icon: <CodeIcon fontSize="small" />,
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML / CSS', level: 70 },
    ],
  },
  {
    label: 'Mobile',
    icon: <PhoneAndroidIcon fontSize="small" />,
    skills: [
      { name: 'React Native', level: 70 },
      { name: 'Swift', level: 50 },
    ],
  },
  {
    label: 'Backend',
    icon: <StorageIcon fontSize="small" />,
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'Symfony', level: 78 },
      { name: 'MySQL / SQL Server', level: 75 },
    ],
  },
  {
    label: 'Outils & DevOps',
    icon: <BuildIcon fontSize="small" />,
    skills: [
      { name: 'Git / GitHub / GitLab', level: 85 },
      { name: 'Docker', level: 55 },
      { name: 'VS Code', level: 75 },
    ],
  },
];

function getLabel(level) {
  if (level >= 80) return 'Avancé';
  if (level >= 60) return 'Intermédiaire';
  if (level >= 40) return 'Notions';
  return 'Débutant';
}

function SkillBar({ name, level, animate }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
        <Typography variant="body2" fontWeight={500}>
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {getLabel(level)} — {level}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={animate ? level : 0}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: 'rgba(124,77,255,0.12)',
          transition: 'value 1s ease',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            background: 'linear-gradient(90deg, #7c4dff, #b47aff)',
            transition: 'transform 1s ease',
          },
        }}
      />
    </Box>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
          Mon expertise
        </Typography>
        <Typography variant="h2" sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.8rem' } }}>
          Compétences
        </Typography>

        <Box ref={ref}>
          <Stack spacing={6}>
            {categories.map((cat) => (
              <Box key={cat.label}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                  <Box color="primary.main">{cat.icon}</Box>
                  <Typography variant="h6" fontWeight={600}>
                    {cat.label}
                  </Typography>
                </Stack>
                <Box>
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animate} />
                  ))}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
