import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
   return (
      <div>
         <nav>
            <Link to="/home"><li>home</li></Link>
            <Link to="/about"><li>about</li></Link>
            <Link to="/login"><li>login</li></Link>
         </nav>
      </div>
   )
}

export default navbar
