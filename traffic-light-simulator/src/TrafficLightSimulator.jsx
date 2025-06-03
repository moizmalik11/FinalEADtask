import React from 'react';

const TrafficLightSimulator = () => {
  return (
    <div style={styles.screen}>
      <div style={styles.trafficBox}>
        <div style={{ ...styles.light, backgroundColor: 'red' }}></div>
        <div style={{ ...styles.light, backgroundColor: 'yellow' }}></div>
        <div style={{ ...styles.light, backgroundColor: 'green' }}></div>
      </div>
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
  },
};

export default TrafficLightSimulator;
