import "./hero.scss"
import {motion} from "framer-motion"

const textvarients = {
    initial:{
        opacity:0,
        x:-500,
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:1,
            staggerChildern:0.2,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },

}
const slidevarients = {
    initial:{
        x:0
    },
    animate:{
        x:"-1000%",
        transition:{
            delay:1,
            duration:30,
            repeat:Infinity,
            repeatType:"mirror"
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <motion.div className="wrapper">
                <motion.div className="textContainer" variants={textvarients} initial="initial" animate="animate">
                    <motion.h2 variants={textvarients}>VIKASH SINGH</motion.h2>
                    <motion.h1 variants={textvarients}>Web developer and UI designers</motion.h1>
                    <motion.div variants={textvarients} className="button">
                        <motion.button variants={textvarients}>Latest Works</motion.button>
                        <motion.button variants={textvarients}>Contact me</motion.button>
                    </motion.div>
                    <motion.img variants={textvarients} animate="scrollButton" src="/scroll.png" alt="scroller_img" />
                </motion.div>
            </motion.div>
            <motion.div className="slidingContent" variants={
                slidevarients
            } initial="initial" animate="animate">
                <p>Frontend Specilist | Mern Stack Developer | Data Anaylist | Creater</p>
            </motion.div>
            <div className="imageContainer">
                <img src="/hero1.png" alt="" />
            </div>

        </div>
    )
}

export default Hero