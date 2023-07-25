import React, { useEffect, useState, useRef } from 'react';
import Footer from '../Footer';

function KnowPregnanacy() {
  const [period, setPeriod] = useState(null);
  const [num, setNum] = useState(null);
  const [predictedDate, setPredictedDate] = useState(null);
  const [predictedweek, setPredictedweek] = useState(null);
  const [predictedmonth, setPredictedmonth] = useState(null);
  const predictedDateRef = useRef(null);

  const handlePeriod = (e) => {
    const date = e.target.value;
    setPeriod(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!period || new Date(period) >= new Date()) {
      alert('Please enter a valid last period date.');
      return;
    }

    if (!num || num < 20 || num > 44) {
      alert('Please enter a valid period duration between 20 and 44 days.');
      return;
    }

    const lastPeriodDate = new Date(period);

    const predictedDeliveryDate = new Date(lastPeriodDate);
    predictedDeliveryDate.setDate(lastPeriodDate.getDate() + 270 + num / 2);

    const week = Math.floor((new Date() - lastPeriodDate) / (1000 * 60 * 60 * 24 * 7)) + 1;

    setPredictedDate(predictedDeliveryDate.toDateString());
    setPredictedweek(week);
    
  };

  useEffect(()=>{
    scrollToPredictedDate();
  },[predictedDate])

  const handleNum = (e) => {
    const number = parseInt(e.target.value);
    setNum(number);
  };

  const scrollToPredictedDate = () => {
    predictedDateRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    console.log(period);
  });

  return (
    <div className="k-main">
      <div className="know">
        
        <h3>Know your predicted delivery date and pregnancy week</h3>
        <form className="form-cls">
          <label className="label">
            Your last period date:
            <input
              type="date"
              id="date"
              name="period-date"
              onChange={handlePeriod}
              required
              placeholder="last period date"
              value={period || ''}
            />
          </label>
          <label className="label">
            Your period duration:
            <input
              type="number"
              min={20}
              max={44}
              id="num"
              name="period-duration"
              onChange={handleNum}
              required
              placeholder="between 20-44 days"
              value={num || ''}
            />
          </label>
          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div className='deliverdate' ref={predictedDateRef}>
          {predictedDate && (
         <p className='hello'>Predicted Delivery Date: <span style={{ textDecoration: 'underline',fontWeight:'bolder' }}>{predictedDate}</span></p>
          )}
           {predictedweek && (
         <p className='hello'>Predicted Pregnacy week: <span style={{ textDecoration: 'underline',fontWeight:'bolder' }}>{predictedweek}</span></p>
          )}
        </div>
        <h3>How is my due date calculated?</h3>
        <p className='para'>There are several ways your due date is determined. If you happen to know the day you conceived, you can count 38-40 weeks from that day to find your due date. (Human gestation takes about 38-40 weeks.)But it is very difficult to tell on which day sperm fertilized the egg and how long between 38 to 40 week(266-280 days) will it take.So we use an average method and we add 270 days from your last period + half of your period gap duration.</p>
      </div>
     
    </div>
  );
}

export default KnowPregnanacy;
