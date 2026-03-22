import React from 'react';
import {
  Box,
  CircularProgress,
  Button,
  Typography,
} from '@mui/material';

const SubmitLoader = ({ 
  loading = false, 
  children, 
  loadingText = 'Submitting...',
  disabled = false,
  ...buttonProps 
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      disabled={loading || disabled}
      sx={{ 
        position: 'relative',
        minHeight: 48,
        ...buttonProps.sx
      }}
      {...buttonProps}
    >
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 'inherit',
          }}
        >
          <CircularProgress 
            size={24} 
            sx={{ 
              color: 'primary.main',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              },
            }} 
          />
        </Box>
      )}
      <Typography 
        component="span" 
        sx={{ 
          visibility: loading ? 'hidden' : 'visible',
          opacity: loading ? 0 : 1,
        }}
      >
        {children}
      </Typography>
      {loading && (
        <Typography 
          variant="body2" 
          sx={{ 
            position: 'absolute',
            color: 'primary.main',
            fontWeight: 500,
            fontSize: '0.875rem',
          }}
        >
          {loadingText}
        </Typography>
      )}
    </Button>
  );
};

export default SubmitLoader;
