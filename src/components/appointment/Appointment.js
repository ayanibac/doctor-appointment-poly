import React from 'react'
import './appoint.css'
//----imgaes---
import appointment from '../../images/appointment.jpg'
//----MUI-----
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Appointment() {
    const navigate = useNavigate()

    const buttonHandled = () => {
        navigate("/home")
    }

    return (
        <div className='appointHoder'>
            <div className='appointHoderBox'>
                <Button variant="contained" onClick={buttonHandled} >
                    Get Appointment
                </Button>
                <img src={appointment} />
            </div>
        </div>
    )
}

export default Appointment