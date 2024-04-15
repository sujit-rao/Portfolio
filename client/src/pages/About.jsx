import React from 'react'
import ChangingWords from '../functions/ChangingWords'

import { motion } from "framer-motion"
import { fadeIn } from '../functions/variant'


export default function about() {
  return (
    <div>
      <>

        <div className="hero min-h-screen pt-16 ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <motion.div variants={fadeIn("left", 0.2)} initial='hidden' whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className=''>

              <img src="pfp.jpg" className="max-w-sm h-52 md:h-96 rounded-full shadow-2xl " />
            </motion.div>

            <div>
              <h1 className="text-5xl font-bold"><ChangingWords /></h1>
              <motion.div variants={fadeIn("right", 0.2)} initial='hidden' whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className=' py-6 space-y-3'>
                <p>Hi there! I'm Sujit Rao, a student diving into the world of web development, focusing on both frontend and backend technologies. Currently pursuing my B.Tech in Information Technology, I enjoy building web applications that are both functional and user-friendly.</p>
                <p>I specialize in the MERN stack, utilizing tools like Node.js, Express.js, React.js, and MongoDB to create web applications. While I enjoy frontend development for its creativity, I find myself drawn to backend development for its problem-solving challenges and data management aspects.</p>
              </motion.div>
              <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }} className=' space-x-6 flex'>
                <a href="https://www.linkedin.com/in/sujit-rao-6b3896242/"><img src="LnkdIcon.webp" className=' h-8 hover:scale-125 duration-300 cursor-pointer ' alt="" /></a>
                <a href="https://www.instagram.com/sujitt_rao/"><img src="instaIcon.webp" className=' border-white h-8 hover:scale-125 duration-300 cursor-pointer' alt="" /></a>
                <a href="https://github.com/sujit-rao"><img src="gitIcon.png" className=' rounded-full h-8 hover:scale-125 duration-300 cursor-pointer' alt="" /></a>

              </motion.div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
