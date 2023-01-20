import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useNavigate } from 'react-router-dom';
import man1 from '../man1.png'
import man2 from '../man2.png'
import woman1 from '../woman1.png'
import woman2 from '../woman2.png'
import { AttachMoney, LowPriority } from '@mui/icons-material';


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
      navigate('/completedTask')
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
            <Card style={{margin: "0 auto"}} sx={{ maxWidth: 345, bgcolor: '#6A5ACD', padding: '14px' , position: "relative" }}>
                  <div className='flex flex-row justify-between items-center my-2'>
                    <div>
                      <Avatar src={img} style={{backgroundColor:"white"}} variant="square">
                      </Avatar>
                    </div>
                    <Button onClick={() => handleCompleted(_id)} variant="contained" size='small' style={{backgroundColor:"white", color: "#6A5ACD"}}>Completed</Button>
                  </div>
                  <div className='flex flex-row justify-between items-center my-2'>
                    <p className='text-white font-bold'>{TaskName}</p>
                    <div className='flex flex-row gap-2  my-2'>
                      {/* <Avatar variant="square" sx={{ bgcolor: 'white',borderRadius:"5px"}} > <NoteAltIcon style={{ color: "lightgreen" }}></NoteAltIcon></Avatar> */}
                      <Avatar onClick={() => handleDeleteTask(_id)} htmlFor="confirmation-modal"   variant="square" sx={{ bgcolor: 'white', borderRadius:"5px" }}> <DeleteIcon style={{ color: "red" }}></DeleteIcon></Avatar>
                    </div>
                  </div>
                  <div className='flex flex-row justify-start my-2'>
                    <AvatarGroup max={3}>
                      <Avatar  src={man1} />
                      <Avatar  src={woman1} />
                      <Avatar  src={man2} />
                      <Avatar  src={woman2} />
                     
                    </AvatarGroup>
                  </div>
                  <div className='grid grid-cols-2 justify-start text-white  my-2'>
                    <div className='flex flex-row'>
                      <LowPriority className='mr-2'></LowPriority>
                      <p className='normal-case'>{Priority}</p>
                    </div>
                    <div className='flex flex-row '>
                      <HourglassTopIcon className='mr-2'></HourglassTopIcon>
                      <p>4 months</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 justify-start text-white  my-2'>
                    <div className='flex flex-row'>
                      <Diversity3Icon className='mr-2'></Diversity3Icon>
                      <p>Member: {Members}</p>
                    </div>
                    <div className='flex flex-row'>
                      <AttachMoney></AttachMoney>
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