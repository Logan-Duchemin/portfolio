import { Box, Typography, IconButton, Tooltip, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Grid>
        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/Logan-Duchemin"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'text.disabled', '&:hover': { color: '#fff' } }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/logan-duchemin-83b75a3b9/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'text.disabled', '&:hover': { color: '#fff' } }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Typography variant="body2" color="text.disabled">
        © {new Date().getFullYear()} Logan Duchemin. Fait avec React & MUI.
      </Typography>

      <Box sx={{ width: 34 }} />
    </Box>
  );
}
