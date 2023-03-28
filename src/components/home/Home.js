import React from 'react'
import './home.css'
//-----MUI-----
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';



function Home() {

  const [location, setLocation] = React.useState('');
  const [hospital, setHospital] = React.useState('');
  const [doctor, setDoctor] = React.useState('');
  const [payment, setPayment] = React.useState('');


  const handleChange1 = (event) => {
    setLocation(event.target.value);
  };
  const handleChange2 = (event) => {
    setHospital(event.target.value);
  };
  const handleChange3 = (event) => {
    setDoctor(event.target.value);
  };
  const handleChange4 = (event) => {
    setPayment(event.target.value);
  };

  return (
    <div className='homeHolder'>
      <form className='homeHolderContainer'>
        <TextField id="standard-basic" label="name" variant="standard" className="textField" />
        <TextField id="standard-basic" label="Ph No" variant="standard" className="textField" />
        <TextField id="standard-basic" label="Email Id" variant="standard" className="textField" />
        <TextField id="standard-basic" label="Location" variant="standard" className="textField" />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="textField selectField">
          <InputLabel id="demo-simple-select-standard-label">Select Location</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={location}
            onChange={handleChange1}
            label="Select Location"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Namakkal</MenuItem>
            <MenuItem value={20}>Trichy</MenuItem>
            <MenuItem value={30}>Chennai</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="textField selectField">
          <InputLabel id="demo-simple-select-standard-label">Select Hospital</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={hospital}
            onChange={handleChange2}
            label="Select Hospital"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Apollo </MenuItem>
            <MenuItem value={20}>Vinayaga mechaine</MenuItem>
            <MenuItem value={30}>Vcare</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="textField selectField">
          <InputLabel id="demo-simple-select-standard-label">Select Payment Method</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={payment}
            onChange={handleChange3}
            label="Select Payment Method"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Online</MenuItem>
            <MenuItem value={20}>Offline</MenuItem>
          </Select>
        </FormControl>

        <TextField className="textField" id="standard-basic" value={3} readOnly="true" label="Queue" variant="standard" />
        <Button variant='contained' className="appointButton">
          Confirm your appointment
        </Button>


      </form>
    </div>
  )
}

export default Home