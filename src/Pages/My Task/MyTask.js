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
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import TaskCard from '../../Shared/TaskCard';
import { AuthContext } from '../../Context/Context';
import task from '../../task-board.json'
import Lottie from "lottie-react";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { AccountTree, Code, AttachMoney, ViewQuilt, LowPriority } from '@mui/icons-material';

import img1 from '../../'
import man1 from '../../man1.png'
import man2 from '../../man2.png'
import woman1 from '../../woman1.png'
import woman2 from '../../woman2.png'

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

  const { user } = useContext(AuthContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey: ['tasks', user?.email ],
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
          <Grid item md={3} className='layout' >
          <Item sx={{ bgcolor: "#6A5ACD" }}>
                            <div className='flex flex-col justify-center items-center gap-8 p-6 pb-0 '>
                                <div>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={user?.photoURL}
                                        sx={{ width: 70, height: 70 }}
                                    />
                                </div>
                                <div className='text-white'>
                                    <div className='flex flex-row gap-4  my-2 items-center text-white'>
                                        <SettingsApplicationsIcon ></SettingsApplicationsIcon>
                                        <p className='mt-1'>Settings</p>
                                    </div>
                                    <div className='flex flex-row gap-4  my-2  items-center text-white'>
                                        <PermContactCalendarIcon></PermContactCalendarIcon>
                                        <p className='mt-1'>Profile</p>
                                    </div>
                                    <div className='flex flex-row gap-4  my-2  items-center text-white'>
                                        <LoginIcon></LoginIcon>
                                       
                                            
                                            <Link to='/login'><p className='mt-1'>Login</p></Link>
                                     
                                    </div>
                                    <div className='flex flex-row gap-4  my-2  items-center text-white'>
                                        <AppRegistrationIcon></AppRegistrationIcon>
                                        <Link to='/register'><p className='mt-1'>Register</p></Link>
                                    </div>
                                   
                                </div>
                            </div>

                            <div>
                                <Lottie animationData={task} loop={true} />
                            </div>
                        </Item>
          </Grid>
          <Grid item xs={12} md={9}>
            <Item className='' sx={{ bgcolor: "white" }}>
              <div >
                <p className='text-3xl font-bold text-black'>My Tasks</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
                  {
                    tasks.map(task => <TaskCard
                      key={task._id}
                      task={task}
                      refetch={refetch}
                    ></TaskCard>)
                  }
                </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
                <div>
                  <Card style={{ margin: "0 auto" }} sx={{ maxWidth: 345, bgcolor: '#6A5ACD', padding: '14px', position: "relative" }}>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <div>
                        <Avatar sx={{ bgcolor: deepOrange[300] }} variant="square">
                          <ViewQuilt></ViewQuilt>
                        </Avatar>
                      </div>
                      <Button variant="contained" size='small' style={{ backgroundColor: "white", color: "#6A5ACD" }}>Completed</Button>
                    </div>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <p className='text-white font-bold'>Web Sign</p>
                      <div className='flex flex-row gap-2  my-2'>
                        {/* <Avatar variant="square" sx={{ bgcolor: 'white',borderRadius:"5px"}} > <NoteAltIcon style={{ color: "lightgreen" }}></NoteAltIcon></Avatar> */}
                        <Avatar htmlFor="confirmation-modal" variant="square" sx={{ bgcolor: 'white', borderRadius: "5px" }}> <DeleteIcon style={{ color: "red" }}></DeleteIcon></Avatar>
                      </div>
                    </div>
                    <div className='flex flex-row justify-start my-2'>
                      <AvatarGroup max={3}>
                        <Avatar src={man1} />
                        <Avatar src={woman1} />
                        <Avatar src={man2} />
                        <Avatar src={woman2} />

                      </AvatarGroup>
                    </div>
                    <div className='grid grid-cols-2 justify-start text-white  my-2'>
                      <div className='flex flex-row'>
                        <LowPriority className='mr-2'></LowPriority>
                        <p className='normal-case'>Highest</p>
                      </div>
                      <div className='flex flex-row '>
                        <HourglassTopIcon className='mr-2'></HourglassTopIcon>
                        <p>4 months</p>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 justify-start text-white  my-2'>
                      <div className='flex flex-row'>
                        <Diversity3Icon className='mr-2'></Diversity3Icon>
                        <p>Member: 5</p>
                      </div>
                      <div className='flex flex-row'>
                        <AttachMoney className='mr-2' ></AttachMoney>
                        <p>1200</p>
                      </div>
                    </div>
                    <div className=' text-white  my-2'>
                      <div className='flex flex-row'>
                        <MarkUnreadChatAltIcon className='mr-2'></MarkUnreadChatAltIcon>
                        <p>Must do it.</p>
                      </div>
                    </div>
                    <div className=' text-white  my-2'>

                    </div>
                  </Card>
                  {

                  }
                </div>
                <div>
                  <Card style={{ margin: "0 auto" }} sx={{ maxWidth: 345, bgcolor: '#6A5ACD', padding: '14px', position: "relative" }}>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <div>
                        <Avatar sx={{ bgcolor: deepPurple[300] }} variant="square">
                          <AccountTree></AccountTree>
                        </Avatar>
                      </div>
                      <Button variant="contained" size='small' style={{ backgroundColor: "white", color: "#6A5ACD" }}>Completed</Button>
                    </div>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <p className='text-white font-bold'>Web Development</p>
                      <div className='flex flex-row gap-2  my-2'>
                        {/* <Avatar variant="square" sx={{ bgcolor: 'white',borderRadius:"5px"}} > <NoteAltIcon style={{ color: "lightgreen" }}></NoteAltIcon></Avatar> */}
                        <Avatar htmlFor="confirmation-modal" variant="square" sx={{ bgcolor: 'white', borderRadius: "5px" }}> <DeleteIcon style={{ color: "red" }}></DeleteIcon></Avatar>
                      </div>
                    </div>
                    <div className='flex flex-row justify-start my-2'>
                      <AvatarGroup max={3}>
                        <Avatar src={man1} />
                        <Avatar src={woman1} />
                        <Avatar src={man2} />
                        <Avatar src={woman2} />

                      </AvatarGroup>
                    </div>
                    <div className='grid grid-cols-2 justify-start text-white  my-2'>
                      <div className='flex flex-row'>
                        <LowPriority className='mr-2'></LowPriority>
                        <p className='normal-case'>Medium</p>
                      </div>
                      <div className='flex flex-row '>
                        <HourglassTopIcon className='mr-2'></HourglassTopIcon>
                        <p>1 months</p>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 justify-start text-white  my-2'>
                      <div className='flex flex-row'>
                        <Diversity3Icon className='mr-2'></Diversity3Icon>
                        <p>Member: 2</p>
                      </div>
                      <div className='flex flex-row'>
                        <AttachMoney className='mr-2' ></AttachMoney>
                        <p>1000</p>
                      </div>
                    </div>
                    <div className=' text-white  my-2'>
                      <div className='flex flex-row'>
                        <MarkUnreadChatAltIcon className='mr-2'></MarkUnreadChatAltIcon>
                        <p>Must do it.</p>
                      </div>
                    </div>
                    <div className=' text-white  my-2'>

                    </div>
                  </Card>
                  {

                  }
                </div>
                <div>
                  <Card style={{ margin: "0 auto" }} sx={{ maxWidth: 345, bgcolor: '#6A5ACD', padding: '14px', position: "relative" }}>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <div>
                        <Avatar sx={{ bgcolor: green[500] }} variant="square">
                          <Code></Code>
                        </Avatar>
                      </div>
                      <Button variant="contained" size='small' style={{ backgroundColor: "white", color: "#6A5ACD" }}>Completed</Button>
                    </div>
                    <div className='flex flex-row justify-between items-center my-2'>
                      <p className='text-white font-bold'>Web Sign</p>
                      <div className='flex flex-row gap-2  my-2'>
                        {/* <Avatar variant="square" sx={{ bgcolor: 'white',borderRadius:"5px"}} > <NoteAltIcon style={{ color: "lightgreen" }}></NoteAltIcon></Avatar> */}
                        <Avatar htmlFor="confirmation-modal" variant="square" sx={{ bgcolor: 'white', borderRadius: "5px" }}> <DeleteIcon style={{ color: "red" }}></DeleteIcon></Avatar>
                      </div>
                    </div>
                    <div className='flex flex-row justify-start my-2'>
                      <AvatarGroup max={3}>
                        <Avatar src={man1} />
                        <Avatar src={woman1} />
                        <Avatar src={man2} />
                        <Avatar src={woman2} />

                      </AvatarGroup>
                    </div>
                    <div className='grid grid-cols-2 justify-start text-white  my-2'>
                      <div className='flex flex-row'>
                        <LowPriority className='mr-2'></LowPriority>
                        <p className='normal-case'>Highest</p>
                      </div>
                      <div className='flex flex-row '>
                        <HourglassTopIcon className='mr-2'></HourglassTopIcon>
                        <p>4 months</p>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 justify-start text-white  my-2'>
                      <div className='flex flex-row'>
                        <Diversity3Icon className='mr-2'></Diversity3Icon>
                        <p>Member: 5</p>
                      </div>
                      <div className='flex flex-row'>
                        <AttachMoney className='mr-2' ></AttachMoney>
                        <p>1200</p>
                      </div>
                    </div>
                    <div className=' text-white  my-2'>
                      <div className='flex flex-row'>
                        <MarkUnreadChatAltIcon className='mr-2'></MarkUnreadChatAltIcon>
                        <p>Must do it.</p>
                      </div>
                    </div>
                    <div className=' text-white  my-2'>

                    </div>
                  </Card>
                  {

                  }
                </div>
                <div>

                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyTask;