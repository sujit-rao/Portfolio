import React from 'react'
import ChangingWords from '../functions/ChangingWords.jsx';
import { NavLink } from 'react-router-dom';





export default function intro() {


    return (
        <>


            {/* <div className='outside bg-[url("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamFqZ2Y0ajR4ajRoZnd2dXoxMWpwbDliY3J4ZzBheWFkOXVqdndvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jZfZ5GuNV17mYE/giphy.gif")] md:flex items-center justify-center md:p-32 p-10 pt-16 h-screen cursor-default  '>

                <div className=' bg-black  rounded-xl shadow-2xl  hover:shadow-gray-900  p-4'>
                    <div className=' p-5 md:p-20 lg:flex' >
                        <div className=''>
                            <h1 className="text-4xl font-bold bg-black">Hey there! I’m <br></br><span className=" text-violet-600 font-serif">Sujit Rao</span></h1>
                            <p className=' mt-4 md:mt-2 bg-black'> I'm a student honing my full-stack skills. Join me on my coding journey as I explore the exciting world of technology.</p>
                            <ChangingWords className="bg-black" />

                        </div>
                        <img className=' h-80' src="https://awesome11ty.ttntm.me/img/undraw_Friends_online_re_r7pq.svg" alt="" />
                    </div>
                    <div className=' flex w-full lg:justify-end justify-center'>
                      <Link to='/profile'>  <button className=' ring-offset-violet-400 ring-1 rounded-lg text-violet-400 px-4 py-2 font-semibold hover:bg-violet-400 hover:text-white mb-4 animate-pulse hover:animate-none'> Continue</button></Link>
                    </div>
                </div>

            </div> */}

            <div className="hero min-h-screen bg-[url('https://c1.wallpaperflare.com/preview/648/572/14/black-and-white-bw-clouds-fog.jpg')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5"> I'm <span className=' font-bold'>Sujit Rao</span>, a student passionate about development.

Explore my portfolio to see my projects and skills. Let's connect!</p>
                        <NavLink to={"/about"}> <button className="btn btn-primary">Get Started</button></NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}
