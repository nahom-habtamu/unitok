import { Link } from 'react-router-dom';

const Logo = () => {
    return <div className="header__logo">
      <Link to="/">
        <img src="img/logo.svg" alt="" />
      </Link>
    </div>
}

export default Logo;