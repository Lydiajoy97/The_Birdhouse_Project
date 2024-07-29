import React, {useState} from 'react';

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
    <div className="bird-dropdown"> Type of bird!
    <br />
    <select onChange={handleBirdChange}> 
      <option> Type of Bird </option>
      {Type_of_bird.map((bird) => <option key={bird.label} value={bird.value}>{bird.label} </option>)}
    </select>
    </div>
  );
}

export default BirdDropdown;