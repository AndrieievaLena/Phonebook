import {useState} from 'react'
import React from 'react';

function App() {
  const [entries, setEntries] = useState([]);
  const addEntryToPhonebook = (entry) => {
  };
  return (
    <div>
      <EntryForm />
      <DisplayEntries />
    </div>
  );


};
export default App;

  function EntryForm() {
    const [firstName, setFirstName] = useState("");
    const [midleName, setMidleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleSubmit=(e) => {
      e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" id="firstName" placeholder='First Name'
        value={firstName} onChange={(e)=> setFirstName[e.target.value]}/>
        <input type="text" name="midleName" id="midleName" placeholder='Midle Name'
        value={midleName} onChange={(e)=> setMidleName[e.target.value]}/> 
        <input type="text" name="lastName" id="lastName" placeholder='Last Name'
        value={lastName} onChange={(e)=> setLastName[e.target.value]}/>
        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone number'
        value={phoneNumber} onChange={(e)=> setPhoneNumber[e.target.value]}/>
      <button type='submit'>Submit</button>
      </form>
      
    );
  };

  function DisplayEntries() {
    return (
      <tablet>

      </tablet>
    );
  }
