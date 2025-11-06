
import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import Summary from './Summary'; 


function App() {
  const [type, setType] = useState('dollar');
  const [dollarAmount, setDollarAmount] = useState(200);
  const [percentage, setPercentage] = useState(5);

  
  const salary = 75000;
  const payPeriods = 24;
  const payPerPeriod = salary / payPeriods; 


  let contributionPerPaycheck = 0;
  if (type === 'dollar') {
    contributionPerPaycheck = dollarAmount;
  } else {
    contributionPerPaycheck = (percentage / 100) * payPerPeriod;
  }


  const totalSavedThisYear = contributionPerPaycheck * 10;

  return (
    <div className="App">
      <h1>My 401(k) Contributions</h1>
      
      <Summary
        salary={salary}
        totalSavedThisYear={totalSavedThisYear}
        contributionPerPaycheck={contributionPerPaycheck}
      />
  
  
      <h2 className="section-title">Select how you would like to contribute</h2>
      <div className="button-container">
      <button 
        className={`option-btn ${type === 'dollar' ? 'active' : ''}`}
        onClick={() => setType('dollar')}
      >
        Fixed Dollar Amount
      </button>
      <button 
        className={`option-btn ${type === 'percentage' ? 'active' : ''}`}
        onClick={() => setType('percentage')}
      >
        Percentage of Paycheck
      </button>
  </div>

  {type === 'dollar' && (
      <div className="slider-container">
        <p className="slider-label">Amount per paycheck</p>
        <p className="slider-value">${dollarAmount}</p>
        <Slider
          value={dollarAmount}
          onChange={setDollarAmount}
          min={0}
          max={1000}
          step={10}
        />
      <div className="slider-labels">
        <span>$0</span>
        <span>$1,000</span>
      </div>
    </div>
  )}

  {type === 'percentage' && (
      <div className="slider-container">
        <p className="slider-label">Percentage of paycheck</p>
        <p className="slider-value">{percentage}%</p>
        <Slider
          value={percentage}
          onChange={setPercentage}
          min={0}
          max={50}
          step={0.5}
        />
        <div className="slider-labels">
          <span>0%</span>
          <span>50%</span>
        </div>
    </div>
)}
    </div>
  );
}

export default App;