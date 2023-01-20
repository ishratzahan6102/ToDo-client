import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
import Loading from './Shared/Loading';
import { AuthContext } from './Context/Context';
import task from './task-board.json'
import Lottie from "lottie-react";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



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

const Login = () => {
    const {register, formState : {errors}, handleSubmit, handleChange} = useForm()
    const {user, loginUser, updateUser,  googleSignIn } = useContext(AuthContext)

// password na milar error
const [loginError, setLoginError ] = useState('')

const [loginUserEmail, setLoginUserEmail] = useState('')
// const [token] = UseToken(loginUserEmail)
// login korle koi redirect hobe
const location = useLocation()
const navigate = useNavigate()
const from = location.state?.from?.pathname || '/'


const handleLogin = data => {
    loginUser(data.email, data.password)
    .then((result) => {
        const user = result.user
        console.log(user)
        setLoginError() 
    })

    .catch((error) => {
        console.error(error)
        setLoginError(error.message)
    })
    navigate(from, {replace : true} )
}


const handleGoogle = () => {
    setLoginError('')
    googleSignIn()
    .then((result) =>{
        const user  = result.user
        console.log(user)
        // toast.success(`Welcome back to Astor ${user.displayName}.`)
        setLoginUserEmail(user.email)
    })
    
    .catch(error =>{
        console.error("errors: ", error)
    })
    navigate(from, {replace : true} )
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
                        <Item sx={{ bgcolor: "#6A5ACD", color:"black" }}>
                            <div className='h-[800px] flex justify-center items-start'>
                                <div className='w-4/6 p-7'>
                                    <h2 className='text-4xl text-white font-bold mb-4'>Log in</h2>
                                    <form className='rounded' style={{backgroundColor: "white", padding: "60px", width:"100%"}} onSubmit={handleSubmit(handleLogin)}>

                                        
                                        <div className="form-control ">
                                            <div className='flex flex-col'>
                                            <label className="label">
                                                <span className="label-text text-gray-600  text-base">Email</span>
                                            </label>
                                            <input style={{border: "1px solid gray"}} type='text' className='input input-bordered p-2 rounded' {...register("email", { required: "Email address is required" })} />
                                            </div>
                                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                                        </div>


                                        <div className="form-control ">
                                            <div className='flex flex-col'>
                                            <label className="label">
                                                <span className="label-text text-gray-600  text-base">Password</span>
                                            </label>
                                            <input style={{border: "1px solid gray"}} type='text' className='input input-bordered p-2 rounded' {...register("password", {
                                                required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/, message: "Password must be uppercase number & special characters" }
                                            })} />
                                            </div>

                                            {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                                          
                                        </div>

                                        {/* <p>{data}</p> */}
                                        <input style={{ backgroundColor: "#6A5ACD", padding: "8px"}}  className='btn btn-primary text-white w-full rounded mt-2' value='submit' type="submit" />

                                        {loginError && <p className='text-error'>{loginError}</p>}
                                        {/* <Toaster /> */}
                                        <p>New to this site?<Link style={{ color: "#6A5ACD"}} className='mt-2 font-bold underline' to='/register'>  Register</Link></p>
                                        <p className='flex justify-center items-start'>Or</p>
                                        <input onClick={handleGoogle} style={{ backgroundColor: "#6A5ACD", padding: "8px"}}  className=' text-white w-full rounded mt-2' value='Sign in with google' type="submit" />

                                    </form>

                                </div>


                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
};

export default Login;