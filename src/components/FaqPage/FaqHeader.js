import React from 'react';
import { Link } from 'react-router-dom';

const FaqHeader = () => {
  return (
    <div class="col-12 col-xl-11">
        <div class="main__title main__title--page">
            <h1>Help center</h1>
            <p>Many desktop publishing packages and 
                <Link to="faqlink"> web page </Link> 
                editors now use Lorem Ipsum as their default model text, 
                and a search for 'lorem ipsum' will uncover many web sites 
                still in their infancy. Various versions have evolved over 
                the years, sometimes by accident, sometimes on purpose 
                (injected humour and the like).
            </p>
        </div>
    </div>
  )
}

export default FaqHeader;