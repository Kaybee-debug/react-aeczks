import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth, db} from '../Config/Config'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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


export const Signup = (props) => {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [registerationError, setRegisterationError]=useState('');

    const handleRegister=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
            db.collection('users').doc(cred.user.uid).set({
                Name: fullName,
                Email: email,
                Password: password
            }).then(()=>{
                setFullName('');
                setEmail('');
                setPassword('');
                setRegisterationError('');
                props.history.push('/login');
            }).catch(err=>setRegisterationError(err.message))
        }).catch(err=>setRegisterationError(err.message))
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
           className={classes.paper}>
            
            <h2>SIGN UP</h2>
            <br></br>
            <br></br>
               
            <form autoComplete="off" className='form-group'
            onSubmit={handleRegister}>
               
                <TextField type="text" 
                 label="Enter  Name" variant="outlined"
                    required onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                />
                <br></br>
                <br></br>
               
                <TextField type="email" 
                label="Enter  Email" variant="outlined"
                    required onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <br></br>
                <br></br>
               
                <TextField type="password" 
                label="Enter  Password" variant="outlined"
                    required onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <br></br>
                 <br></br>
               
                <button type="submit" className='btn btn-success mybtn2'>
                   REGISTER
                </button>
            </form>
            {registerationError&&<div className='error-msg'>
                {registerationError}
            </div>}
           
            <span>Already have an account? 
            <Link to="login">Login</Link></span></Paper>
            </Grid>
            </Grid>
        </div>
    )
}