import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import './App.css';
import { useState } from 'react';

function App() {
  // create a state
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)

  const handleCalculate = (e) =>{
    e.preventDefault()
    console.log(principle);
    if(principle==0 || rate==0 || year==0){
      alert("Please Enter Valid Inputs")
    }else{
      const output = principle*rate*year/100
      setInterest(output);
    }
  }

  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
  }

  return (
    <div className='app'>
      <div className="container">
        {/* heading section */}
        <div className="heading_text">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest</p>
        </div>
        {/* amount card */}
        <div className="total-amount-card">
          <div className="card-text">
            <h3>₹ {interest}</h3>
            <p>Total Simple Interest</p>
          </div>
        </div>
        {/* interest form */}
        <form onSubmit={handleCalculate}>

          <div style={{ marginTop: "40px" }} className='all-inputs'>
            <div className="input-filed">
              <TextField id="outlined-basic" label="₹ Principle Amount" variant="outlined" value={principle||""} onChange={e=>setPrinciple(e.target.value)} />
            </div>
            <div className="input-filed">
              <TextField id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" value={rate||""} onChange={e=>setRate(e.target.value)} />
            </div>
            <div className="input-filed">
              <TextField id="outlined-basic" label="Time Period (Year)" variant="outlined" value={year||""} onChange={e=>setYear(e.target.value)} />
            </div>
          </div>

          <Stack className='btnGroup' spacing={9} direction="row">
            <Button type='submit' className='btn' style={{ backgroundColor: "black" }} variant="contained">Calculate</Button>
            <Button onClick={handleReset} className='btn' variant="outlined">Reset</Button>
          </Stack>

        </form>
      </div>
    </div>
  );
}

export default App;
