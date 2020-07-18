import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Pc from './assets/computador.jpg'
import api from './services/api'


function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('/').then(res => setProjects(res.data))
    }, [])

    async function handleAddProject() {
        // projects.push(`novo projeto ${Date.now()}`)
        // console.log(projects)
        // setProjects([...projects,`novo projeto ${Date.now()}`])
        const response = await api.post('register', {
            title: `novo projeto ${Date.now()}`,
            owner: 'joao'
        })
        const project = response.data
        setProjects([...projects, project])
    }


    return <Header title="Home page" >
        <img src={Pc} width={300} />
        <ul>
            {projects.map(i => <li key={i.id}>{i.title} <br /> {i.owner}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </Header>
}

export default App 