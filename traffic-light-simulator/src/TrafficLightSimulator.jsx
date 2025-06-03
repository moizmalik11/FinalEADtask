import React from 'react';
import  { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
    const [currentLight, setCurrentLight] = useState('red');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLight((prevLight) => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        return 'red'; // Reset to red after green
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
          }}
        ></div><div
          style={{
            ...styles.light,
            backgroundColor: 'yellow',
            opacity: currentLight === 'yellow' ? 1 : 0.5,
          }}
        ></div>
        <div style={{
            ...styles.light,
            backgroundColor: 'green',
            opacity: currentLight === 'green' ? 1 : 0.5,
          }}
        ></div></div>
    </div>
  );
};

// const TrafficLightSimulator = () => {
//   return (
//     <div style={styles.screen}>
//       <div style={styles.trafficBox}>
//         <div style={{ ...styles.light, backgroundColor: 'red' }}></div>
//         <div style={{ ...styles.light, backgroundColor: 'yellow' }}></div>
//         <div style={{ ...styles.light, backgroundColor: 'green' }}></div>
//       </div>
//     </div>
//   );
// };

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
  },
};

export default TrafficLightSimulator;
