import React from 'react';

import Faq from './Faq';

const FaqList = ({faqList,chunkSize}) => {
  
  const buildFaqList = () => {

    const result = [];
    
    for (let i = 0; i < faqList.length; i += chunkSize) {
        const slicedArray = faqList.slice(i, i + chunkSize);

        let builtFaq = slicedArray.map(s => 
            <Faq faq={s}/>
        );

        result.push(
            <div className='col-12 col-lg-4'>{ builtFaq }</div>
        );
    }

    console.log(result);

    return result;
  }

  return (
    <>
        {
            buildFaqList()
        }
    </>
  );
}


export default FaqList;