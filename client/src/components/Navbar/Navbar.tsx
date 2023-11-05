import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from  '../../assets/react.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbar-container'>
        <div  className='logo'>
          <img src={Logo} alt=''/>
         <p>Seyda</p>
        </div>
        <div  className='links'>
          <Link  to='/'  className='link'>Home</Link>
          <Link to='/about' className='link'>About</Link>
        </div>
      </div>
    </div>

      )
}
