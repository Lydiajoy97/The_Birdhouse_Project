import React, {useState} from 'react';
// https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
function BirdDropdown() {

  let BIRD_CHOICES = [
    { label: "Owl", value: "owl" },
    { label: "Eagle", value: "Eagle" },
    { label: "Heron", value: "Heron" },
    { label: "Passerine", value: "Passerine" },
    { label: "Other", value: "Other" },
    { label: "unknown", value: "unknown" }
  ]

  let [bird, setBird] = useState("Type of bird")

  let handleBirdChange = (e) => {setBird(e.target.value)}
  return (
    <div className="ml-auto">
      <option>What type of bird is it?</option>
      <br />
      <select onChange={handleBirdChange}> 
        <option>{bird}</option>
        {BIRD_CHOICES.map((bird) => <option key={bird.label} value={bird.value}>{bird.label} </option>)}
        
      </select>
    </div>
  );
}

export default BirdDropdown;