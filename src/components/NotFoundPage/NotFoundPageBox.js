import { Link } from "react-router-dom";

const NotFoundPageBox = () => {
  return (
    <div className="col-12">
        <div className="page-404">
            <div className="page-404__wrap">
                <div className="page-404__content">
                    <h1 className="page-404__title">404</h1>
                    <p className="page-404__text">
                        The page you are looking for not available!
                    </p>
                    <Link to='/' className="page-404__btn">go back</Link>
                </div>
            </div>
        </div>
    </div>
  );
}
export default NotFoundPageBox;