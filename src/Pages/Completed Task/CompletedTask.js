import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';
import { Avatar, Box, Button, Grid, Modal, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { AuthContext } from '../../Context/Context';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  borderRadius: '0',
  color: theme.palette.text.secondary,
}));

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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6A5ACD",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CompletedTask = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);






  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey: ['tasks', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://todo-server-pearl.vercel.app/completedtasks?email=${user?.email}`)
      const data = await res.json()
      return data
    }
  })




  const handleDeleteTask = (id) => {
    fetch(`https://todo-server-pearl.vercel.app/completedtasks/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch()
          // toast.success("Deleted Successfully")
        }
      })
  }


  const handleNotCompleted = (id) => {
    console.log(id)


    fetch(`https://todo-server-pearl.vercel.app/completedtasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          // toast.success("Successfully added for advertisement!")
          refetch()
          navigate('/My Task')
        }
      })

  }

  const handleComment = data => {
    const comment = data.comment
    console.log(comment)



  }



  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2} lg={2} className='layout'>
            <Item>
            </Item>
          </Grid>

          <Grid item xs={12} lg={10}>
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Index</StyledTableCell>
                      <StyledTableCell align="center">Task Image</StyledTableCell>
                      <StyledTableCell align="center">Task Name</StyledTableCell>
                      <StyledTableCell align="center">Change Status</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                      <StyledTableCell align="center">Comment</StyledTableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tasks.map((task, i) => (
                      <StyledTableRow key={task._id}>

                        <StyledTableCell component="th" scope="row">
                          {i + 1}
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          <Avatar src={task.img} sx={{ width: 30, height: 30, borderRadius: "5px", m: "0 auto" }} variant="square"></Avatar>
                        </StyledTableCell>

                        <StyledTableCell align="center">{task.TaskName}</StyledTableCell>



                        <StyledTableCell align="center">
                          <Button onClick={() => handleNotCompleted(task._id)} variant='contained' size="small">Not Completed</Button>
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          <Avatar onClick={() => handleDeleteTask(task._id)} htmlFor="confirmation-modal" variant="square" sx={{ bgcolor: 'white', borderRadius: "5px", m: "0 auto" }}> <DeleteIcon style={{ color: "red" }}></DeleteIcon></Avatar>
                        </StyledTableCell>


                        <StyledTableCell align="center">
                           <Avatar onClick={handleOpen} variant="square" sx={{ bgcolor: 'white',borderRadius:"5px", m: "0 auto"}} > <NoteAltIcon style={{ color: "lightgreen" }}></NoteAltIcon></Avatar>
                        </StyledTableCell>

                        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} style={{ color: 'black', bgcolor:"#6A5ACD" }} >

                  {/* input box here */}
                  <form className='p-3 '  onSubmit={handleSubmit(handleComment)}>
                    <div className='my-2'>
                      Note : 
                    </div>

                    <div className="form-control w-full max-w-xs">
                    
                      <textarea type='text' style={{border: '2px solid gray', borderRadius: "4px"}}   className='w-full bg-gray-100  text-gray-600 p-1 m-1' {...register("comment", )} />
                    </div>
                    <input style={{ backgroundColor: "#6A5ACD", padding: "4px", color: "white", borderRadius: "4px"}} className='btn btn-neutral w-full ' value='Update Note' type="submit" />
                   
                    
                  </form>

                  {/* input box here */}




                </Box>
              </Modal>




                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Item>
          </Grid>


        </Grid>
      </Box>


    </div>
  );
};

export default CompletedTask;