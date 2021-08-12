import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  








export const Login = (props) => {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [loginError, setLoginError]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            setEmail('');
            setPassword('');
            setLoginError('');
            props.history.push('/');
        }).catch(err=>setLoginError(err.message))
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>


<Grid justify="center"   container spacing={0}>
     <br></br>
        <Grid align="center"  item xs={12} sm={4}>
          <Paper style={{ borderRadius: '0px',height:"550px",backgroundImage:`url("https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg")`,marginTop:"100px"}} className={classes.paper}></Paper>
        </Grid>
        <br></br>
        <Grid  align="center"  item xs={12} sm={4}>
          <Paper style={{ borderRadius: '0px',height:"550px",marginTop:"100px"}}
           className={classes.paper}><h2>SIGN IN</h2>
            <br></br>
               <br></br>
           <form autoComplete="off" 
           onSubmit={handleLogin}>
               
              
               <TextField type="email" label="Your email" variant="outlined"
                   required onChange={(e)=>setEmail(e.target.value)}
                   value={email}

               />
               <br></br>
               <br></br>
               <TextField type="password" 
               label="Password" variant="outlined"
                   required onChange={(e)=>setPassword(e.target.value)}
                   value={password}
               />
               <br></br>
               <br></br>
               <button type="submit" className='btn btn-success mybtn2'>
                  LOGIN
               </button>
           </form>
           {loginError&&<div className='error-msg'>
               {loginError}
           </div>}
           <br></br>
              
           <span>Don't have an account? 
           <Link to="signup"> signup</Link></span></Paper>
        </Grid>
       
      
      </Grid>

        
            
        </div>
    )
}