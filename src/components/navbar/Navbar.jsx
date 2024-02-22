import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const socialContent = [
    {
        link: "https://www.linkedin.com/in/vikash-singh-160389217/",
        path: "/linkedin_img.png"
    },
    {
        link: "https://twitter.com/rpsvikash16",
        path: "/twiiter_img.png"
    },
    {
        link: "https://github.com/Vikash2048?tab=repositories",
        path: "/github.png"
    }
]

const variants = {
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.5},
    },
    hidden: {
        opacity: 0
    }
}

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>

            <div className="wrapper">
                <div className="logo_wrap">
                    <img className="logoImg" src="/logo.png" alt="logo_img" />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >Vikash Singh</motion.span>
                </div>
                <div className="social">
                    <motion.ul initial="hidden" animate="visible" variants={variants}>
                        {
                            socialContent.map((item, i) => (
                                <motion.li key={i} variants={variants}>
                                    <a key={i}   href={item.link}>
                                        <img src={item.path} alt="" />
                                    </a>
                                </motion.li>

                            ))
                        }
                    </motion.ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar