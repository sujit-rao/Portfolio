import React from 'react'
import { fadeIn } from '../functions/variant'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";

export default function portfolio() {
  return (
    <div className='pt-20 overflow-hidden '>
      <div className='md:flex w-screen p-2 gap-4'>
        <div className="container bg-base-200 md:w-1/2 p-4 rounded-lg">
          <motion.div variants={fadeIn("left", 0.2)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className=' text-2xl text-white'>Education</motion.div>
          <br />
          <motion.div variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="timeline-middle flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            <div className="timeline-end text-lg ">Asansol Engineering College</div>
          </motion.div>
          <h2 className=' text-white pl-6'>2021-2025</h2>
          <h2 className=' pl-6 italic text-gray-400'>Bachelor Of Technology (Information Technology)</h2>

          <br />

          <motion.div variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="timeline-middle flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            <div className="timeline-end text-lg ">Sri Chaitanya Techno School</div>
          </motion.div>
          <h2 className=' text-white pl-6'>2019-2021</h2>
          <h2 className=' pl-6 italic text-gray-400'>Maths, Physics, Chemistry</h2>

          <br />

          <motion.div variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="timeline-middle flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            <div className="timeline-end text-lg ">The Crescent School</div>
          </motion.div>
          <h2 className=' text-white pl-6'>-2019</h2>


          <br />
        </div>

        <div className="container bg-base-200 p-4  rounded-lg ">
          <motion.div variants={fadeIn("left", 0.2)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className=' text-2xl text-white'>Learning Journey</motion.div>
          <br />
          <motion.div variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="timeline-middle flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            <div className="timeline-end text-lg ">Mastering the MERN Stack:</div>
          </motion.div>
          <h2 className=' text-white pl-6'>Currently mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack for building dynamic web applications. Focusing on designing robust back-end APIs, creating interactive front-end interfaces, and integrating seamlessly with MongoDB for efficient data storage.</h2>
          {/* <h2 className=' pl-6 italic text-gray-400'>Link</h2> */}

          <br />

          <motion.div variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="timeline-middle flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            <div className="timeline-end text-lg ">Exploring Data Structures and Algorithms (DSA):</div>
          </motion.div>
          <h2 className=' text-white pl-6'>Diving into data structures and algorithms (DSA) to enhance problem-solving skills. Learning to implement fundamental data structures and common algorithms in C++, aiming to apply them effectively in coding challenges and real-world scenarios.</h2>
          {/* <h2 className=' pl-6 italic text-gray-400'>Link</h2> */}

          <br />

          <motion.div variants={fadeIn("left", 0.3)} initial='hidden' whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }} className="timeline-middle flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            <div className="timeline-end text-lg ">Project-Based Learning:</div>
          </motion.div>
          <h2 className=' text-white pl-6'>Engaged in project-based learning to reinforce skills and knowledge. Currently developing a full-stack e-commerce platform using the MERN stack, incorporating user authentication, product management, and payment processing features. Exploring strategies to optimize search functionality and enhance platform performance.</h2>
          {/* <h2 className=' pl-6 italic text-gray-400'>Link</h2> */}

        </div>



      </div>


      <Marquee className='skills-data pt-20'>
        <div className="carousel rounded-box ">
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="html.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="css.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="js.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="react.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="tailwid.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="node.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="express.png" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="mongo.webp" alt="Burger" />
          </div>
          <div className="carousel-item  p-8 h-24 md:h-32 ">
            <img src="cpp.webp" alt="Burger" />
          </div>
        </div>
      </Marquee>

      {/* <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }} className=' container mt-20 bg-base-100 p-10 rounded-t-2xl'>
        <h1>HTML</h1>
        <progress className="progress progress-warning " value="90" max="100"></progress>
        <br />
        <h1>CSS / TAILWIND CSS</h1>
        <progress className="progress progress-warning " value="80" max="100"></progress>
        <br />
        <h1>JAVASCRIPT / REACT</h1>
        <progress className="progress progress-warning " value="70" max="100"></progress>
        <br />
        <h1>NODE / EXPRESS</h1>
        <progress className="progress progress-warning " value="70" max="100"></progress>
        <br /><h1>C / C++</h1>
        <progress className="progress progress-warning " value="60" max="100"></progress>
        <br />
        <h1>MONGO DB</h1>
        <progress className="progress progress-warning " value="70" max="100"></progress>
        <br />
        <h1>SQL</h1>
        <progress className="progress progress-warning " value="60" max="100"></progress>
      </motion.div> */}
    </div>

  )
}
