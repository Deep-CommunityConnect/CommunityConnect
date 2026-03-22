import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import {
  Warning as WarningIcon,
  Info as InfoIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'warning', // warning, info, error, success
  loading = false,
}) => {
  const getIcon = () => {
    const iconProps = {
      fontSize: 'medium',
      sx: {
        mb: 2,
        color: getIconColor(),
        fontSize: 48,
      },
    };

    switch (type) {
      case 'warning':
        return <WarningIcon {...iconProps} />;
      case 'info':
        return <InfoIcon {...iconProps} />;
      case 'error':
        return <ErrorIcon {...iconProps} />;
      case 'success':
        return <CheckCircleIcon {...iconProps} />;
      default:
        return <WarningIcon {...iconProps} />;
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'warning':
        return '#FF9800';
      case 'info':
        return '#2196F3';
      case 'error':
        return '#F44336';
      case 'success':
        return '#4CAF50';
      default:
        return '#FF9800';
    }
  };

  const getConfirmButtonColor = () => {
    switch (type) {
      case 'warning':
        return 'warning';
      case 'info':
        return 'primary';
      case 'error':
        return 'error';
      case 'success':
        return 'success';
      default:
        return 'warning';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          {getIcon()}
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <DialogContentText 
          sx={{ 
            textAlign: 'center',
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      
      <DialogActions sx={{ justifyContent: 'center', pt: 2, gap: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          disabled={loading}
          sx={{
            borderRadius: '8px',
            px: 3,
            py: 1,
          }}
        >
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color={getConfirmButtonColor()}
          disabled={loading}
          sx={{
            borderRadius: '8px',
            px: 3,
            py: 1,
          }}
        >
          {loading ? 'Please wait...' : confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
