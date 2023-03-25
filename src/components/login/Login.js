import React from 'react'
//----images----
import login from '../../images/login.jpg'
//----css-----
import './login.css'
//-----MUI------
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { Fade } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';



function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const formOnSubmited = (e) => {
        e.preventDefault();
        navigate("/appointment")
    }

    return (
        <div className='loginHolder'>
            <div className='loginHolderContainer'>
                <form className='LoginFieldContainer' onSubmit={formOnSubmited}>
                    <Fade bottom>
                        <p className='loginText'>Login</p>
                    </Fade>
                    <Fade bottom>
                        <TextField id="standard-basic" label="Mail Id" variant="standard" className='inputField' />
                    </Fade>
                    <Fade bottom>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" className='passField'>

                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />

                        </FormControl>
                    </Fade>
                    <Fade bottom>
                        <Button className='LoginButton' type="submit" variant='contained'>Log In</Button>
                    </Fade>
                    <Fade bottom>
                        <p className='registerText'>Don't have account ?<Link id="link" to="/register"> Register</Link></p>
                    </Fade>
                </form>
                <div className='LoginImgContainer' >
                    <img src={login} />
                </div>
            </div>
        </div>
    )
}

export default Login