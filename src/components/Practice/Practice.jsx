import React, { useState } from 'react';

const Practice = () => {
    const  [data, setdata] = useState("Hiii");
    const handle =() =>{
        setdata("Mahak")
    }
  return (
    <div>
      <h2>{data}</h2>
      <button onClick={handle}>Change</button>
    </div>
  );
}

export default Practice;
