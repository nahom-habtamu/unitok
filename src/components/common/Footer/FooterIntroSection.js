const FooterIntroSection = () => {
    return(
     <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-4 order-md-1 order-lg-4 order-xl-1">
        <div className="footer__logo">
            <img src="img/logo.svg" alt="" />
        </div>
        <p className="footer__tagline">Digital marketplace for crypto collectibles <br />and non-fungible tokens (NFTs).<br />Buy, sell, and discover exclusive digital assets.</p>

        <div className="footer__lang">
            <a className="footer__lang-btn" href="/" role="button" id="dropdownLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="img/flags/uk.svg" alt="" />
                <span>English</span>
            </a>

            <ul className="dropdown-menu footer__lang-dropdown" aria-labelledby="dropdownLang">
                <li><a href="/"><img src="img/flags/spain.svg" alt="" /><span>Spanish</span></a></li>
                <li><a href="/"><img src="img/flags/russia.svg" alt="" /><span>Russian</span></a></li>
                <li><a href="/"><img src="img/flags/china.svg" alt="" /><span>Chinese</span></a></li>
            </ul>
        </div>
     </div>
    );
}

export default FooterIntroSection;