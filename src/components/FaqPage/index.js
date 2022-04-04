import React from 'react';

import BreadCrumb from '../common/BreadCrumb';
import FaqHeader from './FaqHeader';
import KnowledgeList from './KnowledgeList';
import FaqList from './FaqList';

import FaqItems from '../../constants/FaqItems';
import KnowledgeItems from '../../constants/KnowlegeItems';

const MainContent = () => {
  return (
    <main className='main'>
        <div className='container'>
            <div className='row row--grid'>
                <BreadCrumb
                  active="Home"
                  link="/"
                  nonActive="FAQ"
                />
                <FaqHeader/>
                <KnowledgeList knowledgeList={KnowledgeItems}/>
            </div>

            <div className='row row--grid'>
              <FaqList 
                faqList={FaqItems} 
                chunkSize={3}
              />
            </div>
        </div>
    </main>
  );
}


export default MainContent;