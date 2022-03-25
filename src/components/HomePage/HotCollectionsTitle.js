import { Link } from "react-router-dom";

const HotCollectionsTitle = () => {
    return(
        <div className="col-12">
            <div className="main__title">
                <h2>
                    <Link to='/collections'>Hot Collections</Link>
                </h2>
            </div>
        </div>
    );
}

export default HotCollectionsTitle;