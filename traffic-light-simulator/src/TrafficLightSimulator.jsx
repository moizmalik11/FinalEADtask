import React from 'react';
import  { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
    const [currentLight, setCurrentLight] = useState('red');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLight((prevLight) => {
                
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        return 'red'; // Reset to red 
      });
      }, 3000);
      return () => clearInterval(interval);
       }, [currentLight]);

       return (
    <div style={styles.screen}>
      <div style={styles.trafficBox}> <div
          style={{
            ...styles.light,
            backgroundColor: 'red',
            opacity: currentLight === 'red' ? 1 : 0.5,
            boxShadow: currentLight === 'red' ? '0 0 22px red' : 'none',
          }}
        ></div><div
          style={{
            ...styles.light,
            backgroundColor: 'yellow',
            opacity: currentLight === 'yellow' ? 1 : 0.5,
            boxShadow: currentLight === 'yellow' ? '0 0 22px yellow' : 'none',
          }}
        ></div>
        <div style={{
            ...styles.light,
            backgroundColor: 'green',
            opacity: currentLight === 'green' ? 1 : 0.5,
            boxShadow: currentLight === 'green' ? '0 0 22px green' : 'none',
          }}
        ></div></div>
    </div>
  );
};


const styles = {
  screen: {
    backgroundColor: 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trafficBox: {
    backgroundColor: 'gray',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  light: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    opacity: 0.5,
    transition: 'opacity 0.25s ease-in-out, box-shadow 0.277s ease-in-out',
  },
};

export default TrafficLightSimulator;
