import { useState } from 'react'
import Kabuto from './Kabuto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Kabuto />
  )
}

export default App
