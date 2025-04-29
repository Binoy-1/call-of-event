import React from 'react';
import Homepage from './components/Homepage';
import EventListing from './components/EventListing';
import Registration from './components/Registration';

function App() {
  return (
    <div>
      <h1>Call of Events</h1>
      <Homepage />
      <EventListing />
      <Registration />
    </div>
  );
}

export default App;