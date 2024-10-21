"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import './Header.css'

function Header() {
    
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
      setIsClick(!isClick)
    }
  return (
    <>
    <nav id='nav'>
        <div id='container1'>
            <div id='container2'>
                <div id='container3'>
                <div id='container4'>
                <Link href={"/"} id='link'>
                HAMZA
                </Link>
                </div>
                </div>
                <div id='container5'>
                    <div id='container6'>
                    <Link href={"/"} id='links'>
                Home
                </Link>
                <Link href={"/About"} id='links'>
                About
                </Link>
                <Link href={"/Contact"} id='links'>
                Contact
                </Link>
                    </div>
                </div>
                <div id='container7'>
                    <button id='btn' onClick={toggleNavbar}>
                    {isClick ? (
            <svg
            id='icons'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"/>
</svg>
          ) : (
            <svg 
            id='icons'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
          )}
                    </button>
                </div>
            </div>
        </div>
        {isClick && (
          <div id='container8'>
            <div id='container9'>
            <Link href={"/"} id='linkss'>
                Home
                </Link>
                <Link href={"/About"} id='linkss'>
                About
                </Link>
                <Link href={"/Contact"} id='linkss'>
                Contact
                </Link>
            </div>
          </div>
        )}
    </nav>
    </>
  )
}

export default Header