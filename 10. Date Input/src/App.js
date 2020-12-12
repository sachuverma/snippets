import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const App = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div className="App datepicker">
      <DatePicker 
        selected={date} 
        onChange={date => setDate(date)}
      />
      <p>
        Selected date is <span>{format(date, 'd MMM')}</span>
      </p>
    </div>
  )
}

export default App;
