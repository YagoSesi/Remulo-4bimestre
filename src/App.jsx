import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './React/Header'
import Sobre from './React/Sobre'
import Contato from './React/Contato'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleTheme}>Alterar Tema</button>
      {/* Outros componetes*/}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  const projetos = [
    { title: "Projeto 1", description: "Descrição do projeto 1", link: "#" },
    { title: "Projeto 2", description: "Descrição do projeto 2", link: "#" }
  ];

  {/* Mapear a lista de projetos */}
  <section id="projetos">
    <h2>Projetos</h2>
    {projetos.map((proj, index) => (
      <Projeto key={index} {...proj} />
    ))}
  </section>

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
