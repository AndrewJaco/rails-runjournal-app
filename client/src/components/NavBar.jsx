import { Link } from 'react-router-dom'
import '../stylesheets/Navbar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to='/'>Run Journal</Link>
        {/* |
      <Link to='/runners'>Runners</Link>
       | 
      <Link to='/new'>New Runner</Link>
      |
      <Link to='/login'>Login</Link>
      |
      <Link to='/signup'>Sign up</Link> */}
    </nav>
  )
}

export default NavBar