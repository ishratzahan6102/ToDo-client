import React, { useState } from 'react';
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
import { Description } from '@mui/icons-material';
import ConfirmationModal from './ConfirmationModal';
import { useNavigate } from 'react-router-dom';



const TaskCard = ({task, refetch}) => {
  const {_id, TaskName, Email, Priority, Members, Budget, img, Description, Status} = task

      // const {user,} = useContext(AuthContext)
      
      const navigate = useNavigate()


  const handleDeleteTask = (id) => {

    fetch(`https://todo-server-pearl.vercel.app/tasks/${id}`, {
        method : "DELETE",
        headers : {
          "content-type" : "application/json",
        }
        
    })
    .then(res => res.json())
    .then(data => {
       
        if(data.deletedCount > 0){
            refetch()

            // toast.success("Deleted Successfully")
           
        }
        
    })

  }

  const handleCompleted = (id) => {
    console.log(id)
    fetch(`https://todo-server-pearl.vercel.app/tasks/${id}`, {
      method : "PUT",
      headers : {
        "content-type" : "application/json",
      }
    })
    .then(res => res.json())
    .then(data => {
    if(data.modifiedCount > 0){
      // toast.success("Successfully added for advertisement!")
      refetch()
      navigate('/Completed Task')
    }
    })


    // const tasks = {
    //   TaskName: TaskName,
    //   Email: Email,
    //   Priority: Priority,
    //   Members: Members ,
    //   Budget: Budget,
    //   Description: Description,
    //   img: img,
    //   Status: "Completed"
    // }
    // console.log(tasks)


    // fetch(`https://todo-server-pearl.vercel.app/completedtasks`, {
    //           method: 'POST',
    //           headers: {
    //               "content-type" : "application/json",
    //           },
    //           body: JSON.stringify(tasks)
    //       })
    //           .then(res => res.json())
    //           .then(result => {
    //               console.log(result)
    //               // toast.success(`${data.name} is added successfully`)
    //               refetch()
    //               navigate('/Completed Task')
    //           })

    
  }
  
    return (
        <div>
            <Card style={{margin: "0 auto"}} sx={{ maxWidth: 345, bgcolor: '#6A5ACD', padding: '14px' ,borderRadius: "10px", position: "relative" }}>
                  <div className='flex flex-row justify-between items-center my-2'>
                    <div>
                      <Avatar src={img} sx={{  width: 70, height: 70,borderRadius:"5px" }} variant="square">
                      </Avatar>
                    </div>
                    <Button onClick={() => handleCompleted(_id)} variant="contained">Completed</Button>
                  </div>
                  <div className='flex flex-row justify-between items-center my-2'>
                    <p className='text-white font-bold'>{TaskName}</p>
                    <div className='flex flex-row gap-2  my-2'>
                      {/* <Avatar variant="square" sx={{ bgcolor: 'white',borderRadius:"5px"}} > <NoteAltIcon style={{ color: "lightgreen" }}></NoteAltIcon></Avatar> */}
                      <Avatar onClick={() => handleDeleteTask(_id)} htmlFor="confirmation-modal"   variant="square" sx={{ bgcolor: 'white', borderRadius:"5px" }}> <DeleteIcon style={{ color: "red" }}></DeleteIcon></Avatar>
                    </div>
                  </div>
                  <div className='flex flex-row justify-start my-2'>
                    <AvatarGroup max={4}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                  </div>
                  <div className='grid grid-cols-2 justify-start text-white  my-2'>
                    <div className='flex flex-row'>
                      <AttachFileIcon className='mr-2'></AttachFileIcon>
                      <p className='uppercase'>{Priority}</p>
                    </div>
                    <div className='flex flex-row '>
                      <HourglassTopIcon className='mr-2'></HourglassTopIcon>
                      <p>4 months</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 justify-start text-white  my-2'>
                    <div className='flex flex-row'>
                      <Diversity3Icon className='mr-2'></Diversity3Icon>
                      <p>Assigned To: {Members}</p>
                    </div>
                    <div className='flex flex-row'>
                      <MarkUnreadChatAltIcon className='mr-2'></MarkUnreadChatAltIcon>
                      <p>{Budget}</p>
                    </div>
                  </div>
                  <div className=' text-white  my-2'>
                  <div className='flex flex-row'>
                  <MarkUnreadChatAltIcon className='mr-2'></MarkUnreadChatAltIcon>
                      <p>{Description}</p>
                    </div>
                  </div>
                  <div className=' text-white  my-2'>
                  
                  </div>
                </Card>
                {
                
            }
        </div>
    );
};

export default TaskCard;