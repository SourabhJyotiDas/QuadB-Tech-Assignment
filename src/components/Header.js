import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
   return (
      <header className=" bg-indigo-400 text-white">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="ml-3 text-xl">Movies</Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
               <Link to="/">Home</Link>
            </nav>
         </div>
      </header>
   )
}
