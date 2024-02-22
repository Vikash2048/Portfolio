import React from 'react'
import { motion } from "framer-motion"
import "./test.scss"

const socialContent = [
    {
        link: "#",
        path: "/linkedin_img.png"
    },
    {
        link: "#",
        path: "/twiiter_img.png"
    },
    {
        link: "#",
        path: "/github.png"
    }
]

const varients = {
    visible:{
        opacity:1,
        transition:{staggerChildren:0.2},
    },
    hidden:{opacity:0}
}
const Test = () => {
    return (
        <div className='test'>
            <motion.ul
                initial="hidden" animate="visible" variants={varients}
            >
                {
                    socialContent.map((item, i) => (
                        <motion.li variants={varients} >
                            <a key={i} href={item.link}>
                                <img src={item.path} alt="" />
                            </a>
                        </motion.li>
                    ))
                }
            </motion.ul>

        </div>
    )
}

export default Test