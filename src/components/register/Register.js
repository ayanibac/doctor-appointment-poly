import React from 'react'
//----images----
import login from '../../images/login.jpg'
//----css-----
import '../login/login.css'
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
import { Link } from 'react-router-dom';



function Register() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='loginHolder'>
            <div className='loginHolderContainer'>
                <div className='LoginFieldContainer'>
                    <Fade bottom>
                        <p className='loginText'>Register</p>
                    </Fade>
                    <Fade bottom>
                        <TextField id="standard-basic" label="User name" variant="standard" className='inputField' />
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
                        <TextField id="standard-basic" label="Phone number" variant="standard" className='inputField' />
                    </Fade>
                    
                    <Fade bottom>
                        <Button className='LoginButton' variant='contained'>Register</Button>
                    </Fade>
                    <Fade bottom>
                        <p className='registerText'>already have account ?<Link id="link" to="/"> Login</Link></p>
                    </Fade>
                </div>
                <div className='LoginImgContainer' >
                    <Fade bottom>
                        <img src={login} />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Register