import React,{useEffect, useState} from "react";
import api from './services/api'
import "./styles.css";

function App() {
  const [repositories,setRepositories]= useState([])

  useEffect(()=>{
    api.get('repositories').then(rep => {
      setRepositories(rep.data)
    })
  },[])

  async function handleAddRepository() {
    // TODO
    const response = await api.post('repositories',{
      title:'ta funcionando',
      url:'http://joao.com',
      techs:['NodeJS']      
    })
    setRepositories(...repositories, response)
  }

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`repositories/:${id}`)

    setRepositories(repositories.filter(rep => rep.id !== id))
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map( repo =>(

          <li key={repo.id}>
            {repo.title}

            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
