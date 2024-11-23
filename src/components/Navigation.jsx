import { NavLink } from 'react-router-dom';

const Navigation = () => {

  const navigationBarStyle = { 
    fontFamily: "Poppins",
    display: "flex",
    marginLeft: "auto",
    justifyContent: "space-between",
    listStyleType: "none",
    maxWidth: "300px",
    padding: "0",
    flexWrap: "wrap",
}
  const activePageLinkStyle = {
    fontWeight: "bold",
  }
  const inactivePageLinkStyle = {
  }
  return (
    <nav>
      <ul style={navigationBarStyle}>
        <li className='navLink'><NavLink to='/'
          style = {({ isActive }) => (isActive ? activePageLinkStyle : inactivePageLinkStyle)}>
          Welcome</NavLink></li>
        <li className='navLink'><NavLink to='/aboutMe'
          style = {({ isActive }) => (isActive ? activePageLinkStyle : inactivePageLinkStyle)}>
          About Me</NavLink></li>
        <li className='navLink'><NavLink to='/getInTouch'
          style = {({ isActive }) => (isActive ? activePageLinkStyle : inactivePageLinkStyle)}>
          Get in touch</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;

