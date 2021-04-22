import { useState } from 'react';

const ListAdder = ({ addList })=> {
    const [input, setInput] = useState('');

    const handleInput = (event) =>{
        if (!event.target.value){
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
      <button onClick={() => addList(input)}>Ajouter</button>
    </div>
  );
};

export default ListAdder;
