import "./sidebar.scss"
import Togglebutton from "./togglebutton/Togglebutton"
import Links from "./link/Links"
import { useState } from "react"
import {motion} from "framer-motion"

const varients = {
  open:{
    clipPath:"circle(1300px at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:20
    }
  },
  closed:{
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      delay:0.5,
      type:"spring",
      stiffness: 400,
      damping:40
    }
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} >
        <motion.div className="bg" variants={varients}>
          <Links/>
        </motion.div>
        <Togglebutton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar