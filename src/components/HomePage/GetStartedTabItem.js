import { Link } from "react-router-dom";

const GetStartedTabItem = (props) => {
    const { svgPath, title, description, index, color} = props.item;
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="feature">
            <span className=
                {`feature__icon ${ color === '' ? '' : 'feature__icon--' + color}`}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                    <path d={svgPath}/>
                </svg>
            </span>
            <h3 className="feature__title">{title}</h3>
            <p className="feature__text">
                {description}
                <br />
                {index === 0 && <Link to="/signin">Connect my wallet</Link>}
            </p>
            </div>
        </div>
    );
}

export default GetStartedTabItem;