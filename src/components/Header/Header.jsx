import './Header.css';
import { Link } from 'react-router-dom'; 
import SearchBox from "../searchBox/searchBox"

function Header() {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <Link to="/">logo</Link>
        </div>
        <div className='center-input'>
          <SearchBox/>
        </div>
        <div className='right-links'>
          <Link to="/username">username</Link>
          <Link to="/pocket">Pocket</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
