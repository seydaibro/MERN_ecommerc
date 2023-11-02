import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from  '../../assets/react.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className='container'>
        <div  className='logo'>
          <img src={Logo} alt=''/>
          <h1>This is seyda</h1>
        </div>
        <div  className='links'>
          <Link  to='/'  className='link'>Home</Link>
        </div>
      </div>
    </div>

      )
}
