import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0)


  const containerVariants = {
    hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }
  }

  return (
    <>

      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 0.5, repeat: Infinity }} >
        Bouncing!
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 10 }} transition={{ duration: 10 }} >
        Hello, world!
      </motion.div>
      <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }} >
        <div className="card">
          {/* <img src={image} alt={title} className="card-image" /> */}
          <div className="card-content">
            <h2 className="card-title">Lorem ipsum dolor, </h2>
            <p className="card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum sunt possimus omnis ut, quas harum suscipit iure repellendus.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae deserunt laudantium et dolore repellat eveniet perspiciatis, commodi labore sint aliquid fuga aut totam odio amet laborum cupiditate pariatur ipsum architecto.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt modi officia ex vitae, blanditiis consectetur enim harum similique. Reprehenderit rem aut animi sequi tenetur consequatur eaque accusantium praesentium ullam earum!
            </p>
          </div> </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }} > Hover over me! </motion.div>

      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}
        style={{ width: 50, height: 50, background: 'blue', borderRadius: '50%' }} />
    </>
  )
}

export default App
