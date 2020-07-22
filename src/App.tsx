import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);

  const getUsers = () => {
      axios.get('http://localhost:3001/users')
          .then(res => setUsers(res.data))
  };

  useEffect( () => {
      getUsers();
  }, []);

  const createUser = () => {
      axios.post('http://localhost:3001/users')
          .then( () => getUsers());
  };

  return (
    <div className="App">
      <button onClick={createUser}>Create new user</button>
      {users.map( u => <div key={u.id}>{u.name}</div>)}
    </div>
  );
}

export default App;
