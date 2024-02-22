import { useRef } from "react"
import "./parallex.scss"
import {motion,useScroll, useTransform} from "framer-motion"

const Parallex = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const textBg = useTransform(scrollYProgress,[0,1],["0%","100%"]);
    const yBg = useTransform(scrollYProgress,[0,1],["0%","50%"]);
    return (
        <div className="parallex"
        ref={ref}
            style={{
                background:
                    type === 'service'
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)"
            }}
        >
            <motion.h1 style={{y:textBg}}>{type === "service" ? "What we do?" : "What we did"}</motion.h1>
            <motion.div className="mountain"></motion.div>
            <motion.div style={{y:yBg,backgroundImage:`url(${type === "service" ? "/planets.png" : "/sun.png"})`}} className="planet"></motion.div>
            <motion.div style={{x:yBg}} className="stars"></motion.div>
        </div>
    )
}

export default Parallex