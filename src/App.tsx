import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState<Array<{id?: number, name: string}>>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getUsers = () => {
      axios.get('http://localhost:3001/users')
          .then(res => setUsers(res.data))
  };

  useEffect( () => {
      getUsers();
  }, []);

  const createUser = () => {
      axios.post('http://localhost:3001/users', {name: inputRef.current &&  inputRef.current.value})
          .then( () => getUsers());
  };

  return (
    <div className="App">
        <input type="text" ref={inputRef}/>
      <button onClick={createUser}>Create new user</button>
      {users.map( (u,i) => <div key={i}>{u.name}</div>)}
    </div>
  );
}

export default App;
