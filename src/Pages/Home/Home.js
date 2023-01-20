import { useContext, useState } from 'react';
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
import task from '../../task-board.json'
import Lottie from "lottie-react";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AssignmentIcon from '@mui/icons-material/Assignment';
import bgImg from '../../5096437.jpg'
import WorkIcon from '@mui/icons-material/Work';
import woman1 from '../../woman1.png'
import woman2 from '../../woman2.png'
import man1 from '../../man1.png'
import man2 from '../../man2.png'
import { BarChartSharp, BeachAccess, EventAvailable, LegendToggle, NotInterested, WatchLater } from '@mui/icons-material';
import './Home.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { LineChart, Line } from 'recharts';
import { Link } from 'react-router-dom';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
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


const Home = () => {
    const { user, logout } = useContext(AuthContext)
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

                    <Grid item xs={12} md={6}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={12}>
                                <Item>
                                    <div className='w-full '>
                                        <p>Employees Info</p>
                                        <LineChart className='mx-auto' width={400} height={120} data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="pv" stroke="pink" strokeWidth={5} />
                                        </LineChart>
                                    </div>


                                </Item>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <Item >
                                            <p className='text-black font-bold mb-6'>Employees Availability</p>

                                            <div className="grid grid-cols-2 gap-2 my-4">
                                                <Card className=' home-card'>
                                                    <CardContent>
                                                        <EventAvailable ></EventAvailable>
                                                        <p className='font-bold mt-3'>Attendance</p>
                                                        <p className='text-gray-400'>400</p>
                                                    </CardContent>

                                                </Card>
                                                <Card className=' home-card'>
                                                    <CardContent>
                                                        <WatchLater></WatchLater>
                                                        <p className='font-bold mt-3'>Late Coming</p>
                                                        <p className='text-gray-400'>17</p>
                                                    </CardContent>

                                                </Card>
                                                <Card className=' home-card'>
                                                    <CardContent>
                                                        <NotInterested></NotInterested>
                                                        <p className='font-bold mt-3'>Absent</p>
                                                        <p className='text-gray-400'>06</p>
                                                    </CardContent>

                                                </Card>
                                                <Card className=' home-card'>
                                                    <CardContent>
                                                        <BeachAccess></BeachAccess>
                                                        <p className='font-bold mt-3'>Leave Apply</p>
                                                        <p className='text-gray-400'>17</p>
                                                    </CardContent>

                                                </Card>




                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Item>
                                            <p className='text-black font-bold'>Total Employees</p>
                                            <div className='w-full '>
                                                <PieChart className='mx-auto' width={200} height={284}>
                                                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                                </PieChart>
                                            </div>

                                        </Item>
                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Item>
                                    <p className='text-black font-bold '>Top Hiring Sources</p>

                                    <div className='w-full p-4'>

                                        <BarChart className='mx-auto'
                                            width={400}
                                            height={241}
                                            data={data}
                                            margin={{
                                                top: 20,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                                            <Bar dataKey="uv" fill="#ffc658" />
                                        </BarChart>


                                    </div>
                                </Item>
                            </Grid>


                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={3}>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            <Grid item xs={12} md={12}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
                                    <Grid item xs={12} >
                                        <Item>
                                            <div className='relative h-40 p-2'>
                                                <img className='w-40 ml-auto' src={bgImg} />
                                                <div className='absolute  top-1/3'>
                                                    <Avatar className='p-6' sx={{ bgcolor: "#6A5ACD" }}><AssignmentIcon></AssignmentIcon></Avatar>
                                                    <p className='text-black font-bold text-4xl'>5123</p>
                                                    <p className='font-bold'>Applications</p>
                                                </div>
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={6} md={12}>
                                        <Item>
                                            <div className='flex flex-row items-center justify-between'>
                                                <div className='flex flex-row gap-4 p-2'>
                                                    <Avatar className='p-6' sx={{ bgcolor: "lightgreen" }}><Diversity3Icon></Diversity3Icon></Avatar>
                                                    <div>
                                                        <p className='font-bold text-black text-2xl'>246</p>
                                                        <p className='text-gray-400'>Interviews</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <LegendToggle></LegendToggle>
                                                </div>
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={6} md={12}>
                                        <Item>
                                            <div className='flex flex-row items-center justify-between'>
                                                <div className='flex flex-row gap-4 p-2'>
                                                    <Avatar className='p-6' sx={{ bgcolor: "lightgreen" }}>
                                                        <WorkIcon></WorkIcon>
                                                    </Avatar>
                                                    <div>
                                                        <p className='font-bold text-black text-2xl'>101</p>
                                                        <p className='text-gray-400'>Hired</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <BarChartSharp></BarChartSharp>
                                                </div>
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item>
                                            <div className='p-2'>
                                                <h1 className='mb-6 text-black font-bold'>Upcoming Interviews</h1>
                                                <div className='flex flex-row  justify-between  p-2 my-2'>
                                                    <div className='flex flex-row gap-2 '>
                                                        <Avatar src={woman1} />
                                                        <div>
                                                            <p className='text-black font-bold'>Natalie Portman</p>
                                                            <p>UI/UX designer</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p>1.20 - 2.00</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='flex flex-row justify-between p-2 my-2'>
                                                    <div className='flex flex-row gap-2'>
                                                        <Avatar src={man1}  ></Avatar>
                                                        <div>
                                                            <p className='text-black font-bold'>Marry Butler</p>
                                                            <p>Web Developer</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p>1.20 - 2.00</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='flex flex-row justify-between p-2 my-2'>
                                                    <div className='flex flex-row gap-2'>
                                                        <Avatar src={woman2}  ></Avatar>
                                                        <div>
                                                            <p className='text-black font-bold'>Peter Peigerg</p>
                                                            <p>Web designer</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p>1.20 - 2.00</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='flex flex-row justify-between p-2 my-2'>
                                                    <div className='flex flex-row gap-2'>
                                                        <Avatar src={man2}  ></Avatar>
                                                        <div>
                                                            <p className='text-black font-bold'>Robert Young</p>
                                                            <p>Writer</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p>1.20 - 2.00</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className='flex flex-row justify-between p-2 my-2'>
                                                    <div className='flex flex-row gap-2'>
                                                        <Avatar src={woman2}  ></Avatar>
                                                        <div>
                                                            <p className='text-black font-bold'>Victoria Bell</p>
                                                            <p>Unity 3D</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p>1.20 - 2.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Item>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>



            </Box>
            <Box className='mt-2'>
                <Grid className='justify-end ' container spacing={2}>
                    <Grid className=' text-black' item xs={12} md={9} >
                        <Item>

                            <div className='p-6 '>
                                <p className='text-black font-bold'>Total Performance</p>
                                <p className='mt-6 text-black'>You have 140 <span className='font-bold'>influencers</span> in your company</p>
                                <div className='flex text-black flex-row justify-between w-60 my-6'>
                                    <div>
                                        <p className='font-bold text-3xl'>350</p>
                                        <p>New Task</p>
                                    </div>
                                    <div>
                                        <p className='font-bold text-3xl'>130</p>
                                        <p>Task Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2  bg-red-200 p-2'>
                                <Card className='p-2 home-card '>
                                    <CardContent>
                                        <div className='flex flex-col items-center  p-2 my-2'>
                                            <Avatar src={woman1} />
                                            <p className='text-black text-xs font-bold mt-1'>Joey Tribiany</p>
                                            <p className='text-gray-400 text-xs my-1'>@Short</p>
                                            <p className='text-black font-bold text-3xl'>80%</p>
                                        </div>
                                    </CardContent>

                                </Card>
                                <Card className='p-2  home-card'>
                                    <CardContent>
                                        <div className='flex flex-col  items-center  p-2 my-2'>
                                            <Avatar src={woman2} />
                                            <p className='text-black text-xs font-bold mt-1'>Pheobe Buffey</p>
                                            <p className='text-gray-400 text-xs my-1'>@Short</p>
                                            <p className='text-black font-bold text-3xl'>89%</p>
                                        </div>
                                    </CardContent>

                                </Card>
                                <Card className='p-2  home-card'>
                                    <CardContent>
                                        <div className='flex flex-col  items-center  p-2 my-2'>
                                            <Avatar src={man2} />
                                            <p className='text-black text-xs font-bold mt-1'>Monica Galler</p>
                                            <p className='text-gray-400 text-xs my-1'>@Short</p>
                                            <p className='text-black font-bold text-3xl'>77%</p>
                                        </div>
                                    </CardContent>

                                </Card>
                                <Card className='p-2  home-card'>
                                    <CardContent>
                                        <div className='flex flex-col items-center p-2 my-2'>
                                            <Avatar src={woman1} />
                                            <p className='text-black text-xs font-bold mt-1'>Rachel Parr</p>
                                            <p className='text-gray-400 text-xs my-1'>@Short</p>
                                            <p className='text-black font-bold text-3xl'>75%</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className='p-2  home-card'>
                                    <CardContent>
                                        <div className='flex flex-col  items-center  p-2 my-2'>
                                            <Avatar src={man1} />
                                            <p className='text-black text-xs font-bold mt-1'>Eic Reid</p>
                                            <p className='text-gray-400 text-xs my-1'>@Short</p>
                                            <p className='text-black font-bold text-3xl'>95%</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className='p-2  home-card'>
                                    <CardContent>
                                        <div className='flex flex-col  items-center p-2 my-2'>
                                            <Avatar src={woman2} />
                                            <p className='text-black text-xs font-bold mt-1'>Jane Inc</p>
                                            <p className='text-gray-400 text-xs my-1'>@Short</p>
                                            <p className='text-black font-bold text-3xl'>97%</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default Home;