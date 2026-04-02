import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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

      <Typography variant="body2" color="text.disabled">
        © {new Date().getFullYear()} Logan Duchemin. Fait avec React & MUI.
      </Typography>

      <Box sx={{ width: 34 }} />
    </Box>
  );
}
