import React from 'react';

const ArticlePageHeaderContent = () => {
    return (
        <>
            <img src="img/posts/article.jpg" alt="" />
            <div className="article__meta">
                <a href="/" className="article__category">Documentary</a>
                <span className="article__date">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" />
                    </svg> 09.03.2021, 16:37
                </span>
            </div>
        </>
    );
};

export default ArticlePageHeaderContent;