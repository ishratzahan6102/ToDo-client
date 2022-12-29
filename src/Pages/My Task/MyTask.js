import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';
import { deepOrange, pink } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import TaskCard from '../../Shared/TaskCard';
import { AuthContext } from '../../Context/Context';

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  borderRadius: '0',
  color: theme.palette.text.secondary,
}));



const MyTask = () => {

const {user} = useContext(AuthContext)
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey: ['tasks', user?.email],
    queryFn: async () => {
        const res = await fetch(`https://todo-server-pearl.vercel.app/tasks?email=${user?.email}`)
        const data = await res.json()
        return data
    }
})




if (isLoading) {
    return <Loading></Loading>
}


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} >
          <Grid item md={2} className='layout' >
            <Item sx={{bgcolor:"white"}}>xs=4</Item>
          </Grid>
          <Grid item xs={12} md={10}>
            <Item sx={{bgcolor:"white"}}>
              <Typography id="modal-modal-description" variant='h5' style={{ color: 'gray', font: "bold" }} sx={{ my: 2 }}>
                My Tasks
              </Typography>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                  tasks.map(task => <TaskCard
                  key={task._id}
                  task={task}
                  refetch={refetch}
                  ></TaskCard>)
                }
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyTask;