import { useState } from 'react'
import { Calender } from './Calender'
import { MOCKEVENTS } from './Calender/conts'
 

function App() {

  const [events, setEvents] = useState(MOCKEVENTS)
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});

  const addEvent = (date, color) => {
    const text = window.prompt("text");
    setEvents((prev) => [...prev, {date, title: text, color}])
  }

  const handleOnClickEvent = (event) =>{
    setShowPortal(true);
    setPortalData(event);
  }

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {

    setEvents((prevEvents) => 
      prevEvents.filter((ev) => ev.title !== portalData.title)
    );
    handlePotalClose();
  }
 
  return (
    <div>
    <Calender 
    startingDate = {new Date()} 
    eventsArr={events}
    addEvent={addEvent}
    />
   </div>
  )
}

export default App
