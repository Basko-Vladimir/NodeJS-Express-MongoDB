import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState<Array<{_id: string, name: string}>>([]);
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
          .then( () => {
              if (inputRef.current) inputRef.current.value = '';
              getUsers()
          });
  };

  const deleteUser = (id: string) => {
      axios.delete(`http://localhost:3001/users/${id}`)
          .then(() => getUsers())
  };

  const updateUser = (id: string, name: string) => {
      // const name = updateInputRef.current &&  updateInputRef.current.value;
      axios.put('http://localhost:3001/users', {name, id})
        .then(() => {
            if (inputRef.current) inputRef.current.value = '';
            getUsers()
        });
  };

  return (
    <div className="App">
        <input type="text" ref={inputRef}/>
      <button onClick={createUser}>Create new user</button>
      {users.map( (u,i) => <div key={i}>
                                                              <input defaultValue={u.name} autoFocus={true}
                                                                  onBlur={(e) => updateUser(u._id, e.currentTarget.value)}/>
                                                              <button onClick={() => deleteUser(u._id)}>X</button>
                                                        </div>

      )}
    </div>
  );
}

export default App;
