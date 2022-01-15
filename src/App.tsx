import { useState } from 'react'
import Kabuto from './Kabuto'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Kabuto toggleAnimation={toggle} />
      <button onClick={() => setToggle(!toggle)}>Toggle Animation</button>
    </>
  )
}

export default App
