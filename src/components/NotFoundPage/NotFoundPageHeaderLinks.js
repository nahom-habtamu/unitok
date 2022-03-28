import { Link } from "react-router-dom";

const NotFoundPageHeaderLinks = () => {
    return (
        <div className="col-12">
            <ul className="breadcrumb">
                <li className="breadcrumb__item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="breadcrumb__item breadcrumb__item--active">
                    Error 404
                </li>
            </ul>
        </div>
    );
}

export default NotFoundPageHeaderLinks;