import { useState } from 'react'
import { motion } from 'framer-motion'
import Kabuto from './Kabuto'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Kabuto toggleAnimation={toggle} />
      <motion.button
        onClick={() => setToggle(!toggle)}
        whileHover={{
          scale: 1.2,
          textShadow: '0 0 10px #EEABCE',
        }}
      >
        Toggle Animation
      </motion.button>
    </>
  )
}

export default App
