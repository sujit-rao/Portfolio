import React from 'react'
import { fadeIn } from '../functions/variant'
import {motion} from 'framer-motion'

export default function Contact() {
    return (
        <div className='pt-16 md:pt-2 items-center container '>
            
            <div className="flex w-full flex-col p-6 pt-0 md:p-28 md:pt-16 space-y-2">
            <h1 className=' font-semibold text-2xl'>Contact</h1>
                <div className=' py-8 space-y-2 flex flex-col md:flex-row'>
                    <motion.div variants={fadeIn("right", 0.2)} initial='hidden' whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className="grid flex-grow h-full card bg-base-300 rounded-box p-4">
                        <img src="loc.png" alt="" /><h2>Asansol, West Bengal</h2><p>India</p>
                    </motion.div>
                    <div className="divider lg:divider-horizontal"></div>
                    <motion.div variants={fadeIn("left", 0.2)} initial='hidden' whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className="grid flex-grow h-full card bg-base-300 rounded-box p-4">
                        <img src="mail.webp" alt="" /><h2>sujitrao867@gmail.com</h2>

                    </motion.div>
                </div>

                <form className=" flex-grow  h-full card bg-base-300 rounded-box p-4 space-y-2" action="https://formsubmit.co/122419880919fb48cf0b6de34407c5df" method="POST">

                    <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name" name='name' />
                    </motion.div>
                    <motion.div variants={fadeIn("up", 0.3)} initial='hidden' whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }} className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" name='email' />
                    </motion.div>
                    <textarea className="textarea h-32 " placeholder="Message" name='message'></textarea>
                    <button className="btn btn-warning">Send</button>

                </form>

            </div>

        </div>
    )
}
