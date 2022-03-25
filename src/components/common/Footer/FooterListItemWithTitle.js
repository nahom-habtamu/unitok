import { Link } from "react-router-dom";

const FooterItemListWithTitle = ({title,items}) => {
    const buildFooterItem = () => {
        return items.map((e,index) => <Link key={index} to={e.to}>{e.label}</Link>);
    }
    return (
     <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0">
        <h6 className="footer__title">{title}</h6>
        <div className="footer__nav">
            {
                buildFooterItem()
            }
        </div>
     </div>
    );
}

export default FooterItemListWithTitle;