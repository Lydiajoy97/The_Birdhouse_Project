import React, {useState} from 'react';
// https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
function BirdDropdown() {
  const [setBird] = useState({});

  let Type_of_bird = [
    { label: "Owl", value: "owl" },
    { label: "Eagle", value: "Eagle" },
    { label: "Heron", value: "Heron" },
    { label: "Passerine", value: "Passerine" },
    { label: "Other", value: "Other" },
    { label: "unknown", value: "unknown" }
  ]

  let handleBirdChange = (e) => {setBird(e.target.value)
  }
  return (
    <div className="ml-auto">
    <br />
    <select onChange={handleBirdChange}> 
      <option> Type of Bird </option>
      {Type_of_bird.map((bird) => <option key={bird.label} value={bird.value}>{bird.label} </option>)}
    </select>
    </div>
  );
}

export default BirdDropdown;