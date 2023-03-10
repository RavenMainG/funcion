import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [resultado, setResultado] = useState(0)
  const [variable, setVariable] = useState(0);

  

  const handleChangue = evt => {
    setVariable(evt.target.value)
  }

  const Calcular = () => {
    setResultado((100*Math.E**(-0.0572*variable)) + 35)
    setVariable(0)
  }

  return (
    <div className="App personalizado">
      <div>
          <h1>App para pasar la materia del Papi chulo Profe David</h1>
      </div>
      <div className='personalizado__divmain'>

        <h3>Y = {resultado} </h3>
        
        <div className='input'>
          <label htmlFor='input' >Variable T </label>

          <input itemID='input' type={'text'} placeholder='10' value={variable} onChange={handleChangue} />

        </div>

        <button onClick={Calcular} >Calcular</button>
      </div>
    </div>
  )
}

export default App
