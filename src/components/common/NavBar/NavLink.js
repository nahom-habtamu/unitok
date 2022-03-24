import { Link } from "react-router-dom";

const NavLink = ({ label , to, items }) => {
    return <li className="header__nav-item ">
      {
        items ? 
        <a 
            className={`header__nav-link ${ label ? "" : "header__nav-link--menu"} `} 
            role="button" 
            id={` ${ label ? "dropdownMenuHome" : "dropdownMenu2"} `} 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
            href=""
          > {label} 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path 
                  d={
                    label ?
                    `M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,
                    1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z`
                    :
                    `M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,
                    10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z`
                 }/>
          </svg>
        </a>
        : 
        <Link className='header__nav-link' to={to}>{label}</Link>
      }
        {
          items && <ul 
            className="dropdown-menu header__nav-menu" 
            aria-labelledby={` ${ label ? "dropdownMenuHome" : "dropdownMenu2"} `}>
              {
                items.map(e => <li><Link to={`/${e.toLowerCase()}`}>{e}</Link></li>)
              }
          </ul>
        }
    </li>;
}

export default NavLink;