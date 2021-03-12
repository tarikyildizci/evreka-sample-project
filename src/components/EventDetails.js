import React from 'react';
import { Button } from '../styled-components/Button';
const styles = {
  mainContainer: {
    width: '100%',

    overflow: 'scroll',
    fontSize: '.9rem',
  },
  eventDetailsContainer: {
    height: '300px',
    backgroundColor: '#FFFFFF',
  },
  buttonArea: {},
  buttonPrimary: {},
  tabs: {},
  details: {},
  location: {},
  media: {},
};

const EventDetails = ({ data, setData, selected }) => {
  const myDta = data.data.find((item) => item.id == selected);

  return (
    <div style={styles.mainContainer}>
      {myDta ? (
        <>
          <h1>Event Details</h1>
          <div style={styles.eventDetailsContainer}>
            <div style={styles.buttonArea}>
              <Button large>NO ACTION NEEDED</Button>
              <Button primary>TAKE ACTION</Button>
              <Button>NEXT</Button>
            </div>
            <p>{myDta.details[6].title}</p>
            <p>{myDta.details[6].value}</p>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default EventDetails;
