import React,{useState} from 'react'
import {Header} from './Header'
import {auth, db} from '../Config/Config'
import { Todos } from './Todos';
import { Modal } from './Modal';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import WbSunny from '@material-ui/icons/WbSunny';
import Star from '@material-ui/icons/Star';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Person from '@material-ui/icons/Person';
//import Add from "@material-ui/icons/Add";
import AddAlert from '@material-ui/icons/AddAlert';
import EventAvailable from '@material-ui/icons/EventAvailable';
//import './Home.css';

export const Home = ({currentUser, todos, deleteTodo,
editTodoValue, editModal, updateTodoHandler}) => {

  const [todo, setTodo]=useState('');
  const [todoError, setTodoError]=useState('');

  const handleTodoSubmit=(e)=>{
    e.preventDefault();
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('todos of ' + user.uid).add({
          Todo: todo
        }).then(setTodo('')).catch(err=>setTodoError(err.message))
      }
      else{
        console.log('user is not signed in to add todo to database');
      }
    })
  }

    return (
        <div className='wrapper'>
       
          <div className='container'>
            <form autoComplete='off' className='form-group'
            onSubmit={handleTodoSubmit}>

            {currentUser&&<div >
            <Grid item xs={12} container spacing={0}>
        <Grid
          item
          xs={2}
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            marginLeft: '120px',
            height: '500px',
            marginTop: '90px'
          }}
        >
          <TextField id="outlined-basic" label="Search" variant="outlined">
            {' '}
            <Search />
            Search{' '}
        </TextField>
          <br />
         
         <p style={{}} > <WbSunny /> My Day</p>
          <br />
         
         <p style={{}}> <Star />Important</p>
        
          <br />
         
         <p style={{}} > <CalendarToday /> Planned</p>
          <br />
         
        <p style={{}} >  <Person /> Assigned to you </p><br />
        </Grid>

        <Grid
          item
          xs={5}
          style={{
            height: '500px',
            marginTop: '90px',
            overflowY: 'scroll',
            background: '#3d7bdf'
          }}>
<div className="todo-app">
              <input type="text" placeholder="Enter TODO's"
                className='form-control' required
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
              />
              <br></br>
              <div style={{width: 100+'%',
              display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                  style={{width: 100+'%'}}>
                   ADD
                </button>
               
              </div>
              {todoError&&<div className='error-msg'>{todoError}</div>}
            <Todos todos={todos} deleteTodo={deleteTodo}
             editModal={editModal}/>
              </div>
              </Grid>
              <Grid
          item
          xs={3}
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            height: '500px',
            marginTop: '90px'
          }}
        >
          <br />
         
          
          <p style={{}} ><WbSunny /> add to My Day</p>
          <br />
          
         <p style={{}}> <AddAlert /> Remind Me</p>
          <br />
         
          <p  style={{}}><EventAvailable /> Add due Date</p>
          <br />
        
          <TextField id="outlined-basic" label="Add note" variant="outlined" />
          <br />
         
          
        </Grid>
              
</Grid>
            

            </div>}

            {!currentUser&&<>
              
              <Header currentUser={currentUser}/>
              <div style={{backgroundImage:'green'}}>


         <h1>HELLO & WELCOME TO MY PAGE</h1>


         <p>I am excited to have you get started</p>
Every day starts a new page in your story .make it a great one today
         designed by Karabo molepo<br/>
         <button>Get started</button>
         designed by Karabo molepo<br/>
         </div>
            </>}
          
            
            </form>
            
            </div>

            {editTodoValue&&<Modal editTodoValue={editTodoValue}
              editModal={editModal} updateTodoHandler={updateTodoHandler}
            />} 
              
        </div>
    )
}