import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from  '../../assets/react.svg'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className='container'>
        <div  className='Logo'>
          <img src={Logo} alt=''/>
        </div>
      <div  className='links'>
      {/* <Link  to={}></Link> */}
      </div>
      </div>
      </div>

      )
}
