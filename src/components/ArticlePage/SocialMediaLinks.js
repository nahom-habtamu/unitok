import React from 'react';

const SocialMediaLinks = ({ shareItems }) => {
    const buildShareItems = () => {
        return shareItems.map(e => {
            return <a href='/' className={`share__link share__link--${e.abbrevatedName}`}>
                <svg
                    viewBox={`0 0 ${e.svgWidth} ${e.svgHeight}`}
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    width={e.svgWidth}
                    height={e.svgHeight}>
                    <path d={e.svgPath} />
                </svg>{e.title}
            </a>;
        });
    };

    return (
        <div className='share'>
            {buildShareItems()}
        </div>
    );
};


export default SocialMediaLinks;