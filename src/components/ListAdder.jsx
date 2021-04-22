import { useState } from 'react';

const ListAdder = ({ addList })=> {
    const [input, setInput] = useState('');

    const handleInput = (event) =>{
        if (!event.target.value.match(/\d/g)){
            setInput(event.target.value);
        }
    };
    
return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(event) => handleInput(event)}
      />
      <button onClick={() => addList(input)}>✅</button>
    </div>
  );
};

export default ListAdder;
