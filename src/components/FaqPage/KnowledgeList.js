import React from 'react';

import Knowledge from './Knowledge';

const KnowledgeList = ({knowledgeList}) => {

    const buildKnowledgeList = () => {
      return knowledgeList.map(knowledge => 
        <Knowledge knowledge={knowledge}/>
      );
    }
  
    return (
      <>
        { buildKnowledgeList()}
      </>
    );
  };

export default KnowledgeList;