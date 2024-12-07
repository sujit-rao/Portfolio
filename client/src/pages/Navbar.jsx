import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      }
      else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleOpenPdf = () => {

    window.open('Resume.pdf', '_blank', 'noopener,noreferrer');
  };


  const[open,setOpen] = useState(false)
  const navItem =() => {
      setOpen(!open)
  }



  return (
    <div>
      <div className={`navbar fixed z-50 ${sticky ? "sticky-navbar shadow-md bg-stone-950 duration-800 transition-all ease-in-out" : " bg-transparent"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} onClick={navItem} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className={` menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${open? '' : 'hidden'}`}>
              <li><NavLink to={"/"} onClick={navItem}>Home</NavLink></li>


              <li><NavLink to={"/about"} onClick={navItem} >About</NavLink></li>
              <li><NavLink to={"/profile"} onClick={navItem}>Portfolio</NavLink></li>
              <li><NavLink to={"/contact"} onClick={navItem}>Contact</NavLink></li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl"> <div className="avatar ">
            <div className="w-8 rounded-full">
              <img src="pfpicon.jpeg" alt='' />
            </div>
          </div>
            Sujit Rao</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={"/"}>Home</NavLink></li>


            <li><NavLink to={"/about"} >About</NavLink></li>
            <li><NavLink to={"/profile"}>Portfolio</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleOpenPdf} className="btn hidden lg:flex">Resume<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsElEQVR4nGNgGDHgz2GJo3+OSP6HYInD1LfgCMxwCB61AAP8GQ2i4RdEv49I3kM3FBf+fUTyLskW/Dombvb7sMRbgoYflvzw65CkNVm++HlUyvD3EclXuA2XeAtyCAMl4P9RSY3fRyQeYQmWZz+PiutQZDjCEgn530ckbiEZfu//EVFlqhgOA/8Pikj+OSxxDIRBbLjEKKAaANVSxGasPwQxlhqPqhYcljhEPa8PNAAAxn5grMU468AAAAAASUVORK5CYII=" /></button  >
        </div>
      </div>
    </div>
  )
}

export default Navbar
