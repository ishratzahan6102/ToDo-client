import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmationModal = ({title, message, closeModal, successAction, modalData, successButtonName}) => {
     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="confirmation-modal"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="confirmation-modal" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button  onClick={() => successAction(modalData)} htmlFor="confirmation-modal" variant='contained'>{successButtonName}</Button>
          <Button   onClick={closeModal} variant='contained'>No</Button>
        </Box>
      </Modal>
        </div>
    );
};

export default ConfirmationModal;