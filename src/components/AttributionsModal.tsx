import AttributionIcon from '@mui/icons-material/Attribution';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useCallback, useState } from 'react';

import { Attributions } from '@/components/Attributions';
// import { useThemeColors } from '@/providers/theme/ThemeContext';

export function AttributionsModal() {
  // const { gray } = useThemeColors();

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box data-testid="AttributionsModal" p={0}>
      <IconButton
        color="inherit"
        onClick={handleClickOpen}
        size="small"
        style={{ padding: 0 }}
        tabIndex={-1}
      >
        <AttributionIcon fontSize="small" />
      </IconButton>
      <Dialog aria-labelledby="dialog-title" onClose={handleClose} open={open}>
        <DialogTitle
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
          Attributions
          <IconButton
            aria-label="close"
            onClick={handleClose}
            size="medium"
            style={{
              padding: 0,
              // color: gray,
              height: '32px',
              width: '32px',
            }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 2 }}>
          <Attributions />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
