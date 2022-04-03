import React from 'react';

const Knowledge = ({knowledge}) => {

  const { title , knowledgeItems , iconPath } = knowledge;  

  const buildKnowledgeList = () => {
    return knowledgeItems.map(e => 
        <li>
            <span>{e.key}</span>
            <span>{e.value}</span>
        </li>
    );
  }

  return (
    <div class="col-12 col-md-6 col-lg-4">
        <div class="knowledge">
            <h3 class="knowledge__title">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                    <path d={iconPath}/>
                </svg>{title}</h3>
            <ul class="knowledge__list">
                {
                    buildKnowledgeList()
                }
            </ul>
        </div>
    </div>
  )
}

export default Knowledge;