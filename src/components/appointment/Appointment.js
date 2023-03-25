import React from 'react'
import './appoint.css'
//----imgaes---
import appointment from '../../images/appointment.jpg'
//----MUI-----
import { Button } from '@mui/material';

function Appointment() {
    return (
        <div className='appointHoder'>
            <div className='appointHoderBox'>
                <Button variant="contained" >
                    Get Appointment
                </Button>
                <img src={appointment} />
            </div>
        </div>
    )
}

export default Appointment