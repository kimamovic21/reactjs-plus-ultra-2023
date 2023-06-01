import React, { useState } from 'react'

const InputComponent = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
        <h3>This is from input component: {email}</h3>
        <input type="text" 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
        />
    </div>
  );
};

export default InputComponent;
