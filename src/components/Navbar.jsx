import { Link, useLocation } from "react-router-dom";
function Navbar(){
    const location=useLocation();
    return(
        <nav>
            <Link to='/' className={location.pathname === '/' ? 'active':''}>Home</Link>
            <Link to='/about' className={location.pathname === '/about' ? 'active':''}>About</Link>
            <Link to='/education' className={location.pathname === '/education' ? 'active':''}>Education</Link>
            <Link to='/skills' className={location.pathname === '/skills' ? 'active':''}>Skills</Link>
            <Link to='/projects' className={location.pathname === '/projects' ? 'active':''}>Projects</Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'active':''}>Contact</Link>
        </nav>
    );
}
export default Navbar;
