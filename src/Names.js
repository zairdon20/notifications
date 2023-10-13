import React from 'react'

// ... (rest of the code)

export const names = [
  { name: 'MarkWeber' },
  { name: 'Angela Gray' },
  { name: 'Jacob Thompson' },
  { name: 'Rizy Hasanuddin' },
  { name: 'Kimberly Smith' },
  { name: 'Nathan Peterson' },
  { name: 'Anna Kim' }
];


function Names() {
  return (
    <div className=''>
      {/* <h4>Names:</h4> */}
      <ul >
        {names.map((item, index) => (
          <li key={index} >{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Names;
