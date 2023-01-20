import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Addtask.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Input } from 'postcss';
import { AuthContext } from '../../Context/Context';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AssignmentIcon from '@mui/icons-material/Assignment';   
import { Avatar } from '@mui/material';
import task from '../../task-board.json'
import Lottie from "lottie-react";




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
const AddTask = () => {
  const {user} = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imgbbHostKey = process.env.REACT_APP_imgbb_key
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

  const handleAddDoctor = data => {

    const image = data.img[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          console.log(imgData.data.url)
          const tasks = {
            TaskName: data.task,
            email: user?.email,
            Priority: data.priority,
            Members: data.members,
            Budget: data.budget,
            Description: data.description,
            img: imgData.data.url,
            Status: "Not Completed"
          }
          console.log(tasks)


          fetch(`https://todo-server-pearl.vercel.app/tasks`, {
              method: 'POST',
              headers: {
                  "content-type" : "application/json",
              },
              body: JSON.stringify(tasks)
          })
              .then(res => res.json())
              .then(result => {
                  console.log(result)
                  // toast.success(`${data.name} is added successfully`)
                  navigate('/myTask')
              })
        }
      })


      
  }
 
  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid item md={3} className='layout'>
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
            <Item>
              <Typography id="modal-modal-description" variant='h5' style={{ color: 'black' }} sx={{ my: 2 }}>
                Add Management
              </Typography>
              <Button onClick={handleOpen} variant="contained" style={{backgroundColor: "#6A5ACD"}}>
                <AddCircleIcon  className='mr-2'></AddCircleIcon>
                Create Task

              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} style={{ color: 'black', bgcolor:"#6A5ACD" }} >

                  {/* input box here */}
                  <form className='p-3 '  onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Task Name</span>
                      </label>
                      <input type='text' style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("task", { required: "Task Name is required" })} />
                      {/* {errors.task && <p className='text-error'>{errors.task?.message}</p>} */}
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Task Image & Document </span>
                        </label>
                        <input type='file' style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("img", { required: "Image is required" })} />
                        {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                      </div>

                    </div>

                    <div className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Notification Sent</span>
                        </label>
                        
                        <select style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("priority")}>
                            <option value="all">All</option>
                            <option value="Team Leader Only">Team Leader Only</option>
                            <option value="Team Member Only">Team Member Only</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Task Assigned Person</span>
                        </label>
                        <input type='number' min="1" style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("members", { required: "Number of members  is required" })} />
                      {/* {errors.members && <p className='text-error'>{errors.members?.message}</p>} */}
                    </div>
                    <div className='flex flex-row gap-2' >
                    <div className="form-control w-1/2 max-w-xs">
                      <label className="label">
                        <span className="label-text">Budget</span>
                      </label>
                      <input min="0" type='number' style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("budget", { required: "budget  is required" })} />
                      {/* {errors.budget && <p className='text-error'>{errors.budget?.message}</p>} */}
                    </div>
                    <div className="form-control w-1/2 max-w-xs">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("priority")}>
                            <option value="Highest">Highest</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            <option value="Lowest">Lowest</option>
                        </select>
                    </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <textarea type='text' style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("description", )} />
                    </div>
                    <input style={{ backgroundColor: "#6A5ACD", padding: "4px", color: "white", borderRadius: "4px"}} className='btn btn-neutral w-full ' value='Add Task' type="submit" />
                    {/* {signUpError && <p className='text-error'>{signUpError}</p>} */}
                    
                  </form>

                  {/* input box here */}




                </Box>
              </Modal>



            </Item>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default AddTask;