import { Link } from "react-router-dom";

const TopSellersSectionHeader = ()  => {
    return <div className="col-12">
        <div className="main__title">
            <h2>Top sellers</h2>
            <Link to='/authors' className="main__link">
                View all
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d={`M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1, 1,0,0,0-1.42,1.42L14.59,11H7a1, 1,0,0,0,0,2h7.59l-3.3,3.29a1,1, 0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1, 1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z`} /> </svg>
            </Link>
        </div>
    </div>;
}

export default TopSellersSectionHeader;