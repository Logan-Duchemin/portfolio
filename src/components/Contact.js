import { Box, Container, Typography, Stack, IconButton, Button, Tooltip, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socials = [
  { label: 'Email', icon: <EmailIcon fontSize="large" />, href: 'mailto:ducheminlogan4@gmail.com', color: '#ea4335' },
  { label: 'GitHub', icon: <GitHubIcon fontSize="large" />, href: 'https://github.com/Logan-Duchemin', color: '#fff' },
  { label: 'LinkedIn', icon: <LinkedInIcon fontSize="large" />, href: 'https://www.linkedin.com/in/logan-duchemin/', color: '#0a66c2' },
];

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            border: '1px solid rgba(124,77,255,0.2)',
            borderRadius: 4,
            textAlign: 'center',
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="overline" color="primary" fontSize={13} letterSpacing={3}>
            Travaillons ensemble
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
            Vous avez un projet en tête ou une opportunité à partager ? N'hésitez pas à me contacter, je réponds généralement sous 24h.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            onClick={() => { window.location.href = 'mailto:ducheminlogan4@gmail.com'; }}
            sx={{ borderRadius: 99, mb: 2, px: 4 }}
          >
            Envoyer un email
          </Button>

          <Typography variant="body2" color="text.disabled" sx={{ mb: 4 }}>
            ducheminlogan4@gmail.com
          </Typography>

          <Box>
            <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 2 }}>
              Retrouvez-moi aussi sur
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
              {socials.map((social) => (
                <Tooltip key={social.label} title={social.label}>
                  <IconButton
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': { color: social.color, borderColor: social.color, bgcolor: 'transparent' },
                      transition: 'all 0.2s',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
