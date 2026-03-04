import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="body2" color="text.disabled">
        © {new Date().getFullYear()} Logan Duchemin. Fait avec React & MUI.
      </Typography>
    </Box>
  );
}
